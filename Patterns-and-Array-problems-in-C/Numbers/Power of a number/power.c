#include "stdio.h"

int main() {
  int number, power, i, answer = 1;
  printf("Enter the number to find power: ");
  scanf("%d", &number);
  printf("Enter the power");
  scanf("%d", &power);
  for (i = 1; i <= power; i++) {
    answer *= number;
  }
  printf("%d ^ %d = %d", number, power, answer);
}