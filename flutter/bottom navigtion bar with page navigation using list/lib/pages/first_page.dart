import 'package:amazon_clone/pages/home_page.dart';
import 'package:amazon_clone/pages/profile_page.dart';
import 'package:amazon_clone/pages/settings_page.dart';
import 'package:flutter/material.dart';

class Firstpage extends StatefulWidget {
  Firstpage({super.key});

  @override
  State<Firstpage> createState() => _FirstpageState();
}

class _FirstpageState extends State<Firstpage> {
  int _selectedIndex = 0;

  void _navigateBottombar(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  final List _pages = [homepage(), settings(), Profilepage()];

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
      body: _pages[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: _navigateBottombar,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: "home",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'profile',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: "settings",
          )
        ],
        selectedItemColor: Colors.blue,
      ),
    );
  }
}
