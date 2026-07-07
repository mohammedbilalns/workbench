import 'package:amazon_clone/pags/first_page.dart';
import 'package:amazon_clone/pags/second_page.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Firstpage(),
      routes: {'/secondpage': (context) => Secondpage()},
    );
  }
}
