import 'package:amazon_clone/pags/second_page.dart';
import 'package:flutter/material.dart';

class Firstpage extends StatelessWidget {
  const Firstpage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
        title: const Center(
          child: Text(
            "First page",
          ),
        ),
      ),
      body: Center(
          child: ElevatedButton(
        style: ButtonStyle(
            backgroundColor: MaterialStatePropertyAll(Colors.blue),
            foregroundColor: MaterialStatePropertyAll(Colors.white)),
        child: Text("Go to next page"),
        onPressed: () {
          Navigator.pushNamed(context, '/secondpage');
        },
      )),
    );
  }
}
