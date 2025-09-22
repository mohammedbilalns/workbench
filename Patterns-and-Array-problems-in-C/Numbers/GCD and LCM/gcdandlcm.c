#include "stdio.h"

int main() {
  int num1, num2, gcd, lcm, temp, product;
  printf("Enter the numbers to find GCD and LCM");
  scanf("%d%d", &num1, &num2);
  product = num1 * num2;
  if (num2 > num1) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
  } // swap if second is larges
  while (num2 != 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  printf("GCD : %d , LCM: %d", num1, product / num1);

  return 0;
}