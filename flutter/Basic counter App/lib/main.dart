import 'package:flutter/material.dart';
import 'package:flutter_sample/pages/counterpage.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  void _incrementCounter() {}
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: CounterPage(),
    );
  }
}
