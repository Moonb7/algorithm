#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    int answer = n % 2 == 0 ? n : n - 1;
    int count = answer / 2;
    answer = count * (2 + answer) / 2;
    return answer;
}