import 'package:flutter/material.dart';

class ToDopage extends StatefulWidget {
  const ToDopage({super.key});

  @override
  State<ToDopage> createState() => _ToDopageState();
}

class _ToDopageState extends State<ToDopage> {
  String greetingmessage = '';

  TextEditingController textcontroller = TextEditingController();

  void greetUser() {
    setState(() {
      greetingmessage = 'hello, ' + textcontroller.text;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
      child: Padding(
        padding: const EdgeInsets.all(25.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(greetingmessage),
            TextField(
              controller: textcontroller,
              decoration: InputDecoration(
                  border: OutlineInputBorder(), hintText: "Type Something"),
            ),
            ElevatedButton(
              onPressed: greetUser,
              child: Text("Tap"),
              style: ButtonStyle(
                  backgroundColor: MaterialStatePropertyAll(Colors.blue),
                  foregroundColor: MaterialStatePropertyAll(Colors.white)),
            )
          ],
        ),
      ),
    ));
  }
}
