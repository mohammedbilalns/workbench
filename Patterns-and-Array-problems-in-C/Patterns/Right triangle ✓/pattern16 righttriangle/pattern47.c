#include "stdio.h"

int main(){
    char mal[] = "MALAYALAM";
    int n = 9;
    for(int i=0; i<n;i++){
        
        for(int j=0;j<=i;j++){  
                printf("%c ",mal[j]);
        }
        printf("\n");
    }
    return 0;
}