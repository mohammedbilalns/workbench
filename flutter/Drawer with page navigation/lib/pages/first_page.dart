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
      drawer: Drawer(
        backgroundColor: Color.fromARGB(255, 244, 250, 255),
        child: Column(children: [
          const DrawerHeader(
              child: Icon(
            Icons.favorite,
            size: 45,
          )),
          ListTile(
            leading: Icon(Icons.home),
            title: Text("Home"),
            onTap: () {
              Navigator.pop(context);
              Navigator.pushNamed(context, '/homepage');
            },
          ),
          ListTile(
            leading: Icon(Icons.settings),
            title: Text("Settings"),
            onTap: () {
              Navigator.pop(context);
              Navigator.pushNamed(context, '/settings');
            },
          )
        ]),
      ),
    );
  }
}
