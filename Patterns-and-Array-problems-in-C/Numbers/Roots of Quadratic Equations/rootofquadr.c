
#include "stdio.h"
#include <complex.h>
#include <math.h>

int main() {
  int a, b, c, descriminant;
  double solution1, solution2;

  printf("Enter the coeff of x^2: ");
  scanf("%d", &a);
  printf("Enter the coefficient of x: ");
  scanf("%d", &b);
  printf("Enter the constant term: ");
  scanf("%d", &c);

  descriminant = b * b - 4 * a * c;

  if (descriminant >= 0) {
    solution1 = (-b + sqrt(descriminant)) / (2 * a);
    solution2 = (-b - sqrt(descriminant)) / (2 * a);
    printf("Solution 1: %0.2f, solution 2: %.2f", solution1, solution2);
  } else {
    solution1 = (-b + I * sqrt(-descriminant)) / (2 * a);
    solution2 = (-b - I * sqrt(-descriminant)) / (2 * a);

    printf("Solution 1: %0.2f + %0.2fi  Solution 2: %0.2f+%0.2fi ",
           creal(solution1), cimag(solution1), creal(solution2),
           cimag(solution2));
  }
}