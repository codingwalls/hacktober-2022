#include <iostream>
int main(){
    char ch;
    int a, b, result;


    cout<<"Enter an Operator (+, *, *, /):";
    cin>>ch;
    cout<<"Enter two operands: \n";
    cin>>a>>b;

    switch(ch){
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }
   cout<<result;
    return 0;
}
