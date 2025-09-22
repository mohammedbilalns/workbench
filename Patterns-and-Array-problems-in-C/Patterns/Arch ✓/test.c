#include "stdio.h"

int main(){

    int n =6,k=0;
    for(int i=1;i<=2*n-1;i++){
        k+= i<=n ? 1 :-1;
        for(int j=1;j<=n;j++){
           if(j<=n-k+1){
            printf("*");
           }else{
            printf(" ");
           }
        }
        printf("\n");
    }
    
    return 0;
}
