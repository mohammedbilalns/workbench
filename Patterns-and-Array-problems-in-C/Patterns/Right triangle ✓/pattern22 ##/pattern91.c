#include "stdio.h"

int main(){


    int n = 7;

    for(int i=1;i<=n;i++){
        int k=0;
        for(int j=1;j<=i;j++){
            if(i%2==1){
                printf("%d",k+1);
            }else{
                printf("%c",'A'+k);
            }
            if(i%2==1){
                k++;
            }


        }



        printf("\n");
    }
}