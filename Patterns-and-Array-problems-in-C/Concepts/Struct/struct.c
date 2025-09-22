#include <stdio.h>
#include <string.h>

struct Player {
	char name[12];
	int score;
};
int main(){

	struct Player player1;
	struct Player player2;

	strcpy(player1.name,"Bilal");
	player1.score = 30;

	strcpy(player2.name,"dfd");
	player2.score = 30;
	


	return 0;
	}
