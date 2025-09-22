#include "stdio.h"

int main(){


    int n = 5 ;

    for(int i=1;i<=n;i++){
        int k = n;
        for(int j=1;j<=n;j++){
            if(j!= n-i+1){
                printf("%d",k--);
            }else{
                printf("*");
                k--;
            }
        }

        printf("\n");
    }




    return 0;
}