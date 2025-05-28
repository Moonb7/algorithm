#include <string>
#include <vector>

using namespace std;

int solution(int num1, int num2) {
    float result = (float)num1 / num2;
    result *= 1000;
    
    return result;
}