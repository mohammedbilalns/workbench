#include <stdio.h>

int main() {
    int n, i, j, num;
    int top = 0, bottom, left = 0, right;

    printf("Enter the size of the pattern: ");
    scanf("%d", &n);

    bottom = n - 1;
    right = n - 1;

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            // Top row
            if (i == top && j >= left && j <= right)
                num = j - left + 1;
            // Right column
            else if (j == right && i > top && i <= bottom)
                num = (right - left + 1) + (i - top);
            // Bottom row
            else if (i == bottom && j < right && j >= left)
                num = (right - left + 1) + (bottom - top) + (right - j);
            // Left column
            else if (j == left && i < bottom && i > top)
                num = (right - left + 1) + (bottom - top) + (right - left) + (bottom - i);
            else
                num = 0;  // This will be overwritten in the next iteration

            if (num == 0) {
                // Recalculate for inner spiral
                top++;
                bottom--;
                left++;
                right--;
                j--;
                continue;
            }

            printf("%3d ", num);
        }
        printf("\n");
    }

    return 0;

}