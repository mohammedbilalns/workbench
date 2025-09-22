#include "stdio.h"

int main(){

    int n=5,k;
    for(int i=1;i<=n;i++){
        k=0;
        for(int j=1;j<=2*n-1;j++){
            if(j==n-i+1){
                printf("%c",'A'+k);
            }else if(j==n+i-1){
                printf("%c",'A'+2*i-2);
            }else if (i==n) {
                k++;
                printf("%c",'A'+k);
            
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}