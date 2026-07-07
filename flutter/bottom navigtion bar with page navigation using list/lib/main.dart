import 'package:amazon_clone/pages/first_page.dart';
import 'package:amazon_clone/pages/home_page.dart';
import 'package:amazon_clone/pages/profile_page.dart';
import 'package:amazon_clone/pages/settings_page.dart';
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
      routes: {
        '/firstpage': (context) => Firstpage(),
        '/homepage': (context) => homepage(),
        '/settings': (context) => settings(),
        '/profile': (context) => Profilepage()
      },
    );
  }
}
