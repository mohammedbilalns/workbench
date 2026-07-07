import 'package:flutter/material.dart';

class CounterPage extends StatefulWidget {
  const CounterPage({super.key});

  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  void _clearCounter() {
    setState(() {
      _counter = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
        title: Text("Counter"),
      ),
      body: Center(
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          Text("You pushed the button this time"),
          Text(
            _counter.toString(),
            style: TextStyle(fontSize: 45),
          ),
          ElevatedButton(
            onPressed: _incrementCounter,
            child: Text("increment"),
            style: ButtonStyle(
                backgroundColor: MaterialStatePropertyAll(Colors.blue),
                foregroundColor: MaterialStatePropertyAll(Colors.white)),
          ),
          ElevatedButton(onPressed: _clearCounter, child: Text("clear"))
        ]),
      ),
    );
  }
}
