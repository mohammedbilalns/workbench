import { useState, useEffect, useRef, useCallback } from "react";
import { io } from "socket.io-client";

const SERVER_URL = "http://localhost:3000";
const roomId = "test-room";

function App() {
  const localVideo = useRef();
  const remoteVideo = useRef();
  const peerRef = useRef(null);
  const socketRef = useRef(null);
  const localStreamRef = useRef(null);

  const [joined, setJoined] = useState(false);
  const [socketConnected, setSocketConnected] = useState(false);

  // Initialize socket connection only once
  useEffect(() => {
    socketRef.current = io(SERVER_URL);

    socketRef.current.on('connect', () => {
      console.log('[CLIENT] ✅ Connected to server with ID:', socketRef.current.id);
      setSocketConnected(true);
    });

    socketRef.current.on('disconnect', (reason) => {
      console.log('[CLIENT] ❌ Disconnected from server. Reason:', reason);
      setSocketConnected(false);
    });

    socketRef.current.on('connect_error', (error) => {
      console.error('[CLIENT] ❌ Connection error:', error.message);
      setSocketConnected(false);
    });

    // Cleanup on component unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const createPeer = useCallback(() => {
    console.log('[CLIENT] 🤝 Creating RTCPeerConnection...');
    const peer = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
    });

    // Add local stream tracks to the peer connection
    localStreamRef.current.getTracks().forEach(track => {
      peer.addTrack(track, localStreamRef.current);
    });

    peer.ontrack = (event) => {
      console.log('[CLIENT] 📹 Received remote track.');
      if (remoteVideo.current) {
        remoteVideo.current.srcObject = event.streams[0];
      }
    };

    peer.onicecandidate = (event) => {
      if (event.candidate) {
        console.log('[CLIENT] 🧊 Sending ICE candidate.');
        socketRef.current.emit("ice-candidate", { roomId, candidate: event.candidate });
      }
    };

    peer.onconnectionstatechange = () => {
      console.log('[CLIENT] 🔗 Connection state:', peer.connectionState);
    };

    return peer;
  }, []);

  const joinRoom = async () => {
    try {
      setJoined(true);
      console.log('[CLIENT] 📹 Requesting user media...');
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localStreamRef.current = stream;
      if (localVideo.current) {
        localVideo.current.srcObject = stream;
      }

      peerRef.current = createPeer();

      console.log('[CLIENT] 📡 Emitting "join-room" event.');
      socketRef.current.emit("join-room", roomId);
    } catch (error) {
      console.error('[CLIENT] ❌ Error joining room:', error);
      alert("Failed to access camera/microphone.");
      setJoined(false);
    }
  };

  const handleUserJoined = useCallback(async () => {
    console.log('[CLIENT] 🎉 Another user joined. Creating and sending offer.');
    if (!peerRef.current) {
      peerRef.current = createPeer();
    }
    const offer = await peerRef.current.createOffer();
    await peerRef.current.setLocalDescription(offer);
    socketRef.current.emit("offer", { roomId, offer });
  }, [createPeer]);

  const handleReceiveOffer = useCallback(async ({ offer }) => {
    console.log('[CLIENT] 📨 Received offer. Creating and sending answer.');
    if (!peerRef.current) {
      console.error('[CLIENT] Peer connection not initialized when offer received!');
      // This case should ideally not happen if logic is correct
      return;
    }
    await peerRef.current.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await peerRef.current.createAnswer();
    await peerRef.current.setLocalDescription(answer);
    socketRef.current.emit("answer", { roomId, answer });
  }, []);

  const handleAnswer = useCallback(async ({ answer }) => {
    console.log('[CLIENT] 📨 Received answer. Setting remote description.');
    if (!peerRef.current) {
      console.error('[CLIENT] Peer connection not initialized when answer received!');
      return;
    }
    await peerRef.current.setRemoteDescription(new RTCSessionDescription(answer));
  }, []);

  const handleNewIceCandidate = useCallback(async ({ candidate }) => {
    console.log('[CLIENT] 🧊 Received ICE candidate. Adding to peer connection.');
    if (!peerRef.current) {
      console.error('[CLIENT] Peer connection not initialized when ICE candidate received!');
      return;
    }
    try {
      await peerRef.current.addIceCandidate(new RTCIceCandidate(candidate));
    } catch (error) {
      console.error('[CLIENT] ❌ Error adding ICE candidate:', error);
    }
  }, []);

  // Set up Socket.IO event listeners
  useEffect(() => {
    if (!socketRef.current) return;

    socketRef.current.on("user-joined", handleUserJoined);
    socketRef.current.on("offer", handleReceiveOffer);
    socketRef.current.on("answer", handleAnswer);
    socketRef.current.on("ice-candidate", handleNewIceCandidate);

    // Cleanup function to remove listeners
    return () => {
      socketRef.current.off("user-joined", handleUserJoined);
      socketRef.current.off("offer", handleReceiveOffer);
      socketRef.current.off("answer", handleAnswer);
      socketRef.current.off("ice-candidate", handleNewIceCandidate);
    };
  }, [handleUserJoined, handleReceiveOffer, handleAnswer, handleNewIceCandidate]);

  return (
    <div style={{ padding: 20 }}>
      <h2>WebRTC Debug Room: {roomId}</h2>
      <p>Socket Status: {socketConnected ? '✅ Connected' : '❌ Disconnected'}</p>
      {!joined && <button onClick={joinRoom}>Join Room</button>}
      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <div>
          <h3>Local Video</h3>
          <video ref={localVideo} autoPlay playsInline muted style={{ width: 300, border: '1px solid black' }} />
        </div>
        <div>
          <h3>Remote Video</h3>
          <video ref={remoteVideo} autoPlay playsInline style={{ width: 300, border: '1px solid black' }} />
        </div>
      </div>
    </div>
  );
}

export default App;
