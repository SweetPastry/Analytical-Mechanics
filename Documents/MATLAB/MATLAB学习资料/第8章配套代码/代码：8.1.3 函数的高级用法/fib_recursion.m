function F =  fib_recursion(n)
% ���õݹ����쳲���������
    if n == 1 || n == 2
        F = 1; 
    else
        F = fib_recursion(n-1) +  fib_recursion(n-2);
    end
end  
  
%% 
% ���׵Ľ�����Ƶ����bilibili����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  �ۿ���ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
