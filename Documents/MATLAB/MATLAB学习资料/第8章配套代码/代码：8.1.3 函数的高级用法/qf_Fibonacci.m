clc;clear
Fibonacci(5)
Fibonacci(10)
Fibonacci(30)

function f = Fibonacci(n)
% ����һ���ֲ�����
% ���ڼ���쳲��������еĵ�n��
    F = ones(1,n); 
    for k = 3:n
        F(k) = F(k-1) + F(k-2);
    end
    f = F(n);
end  


  
%% 
% ���׵Ľ�����Ƶ��ҿ���bվ����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
