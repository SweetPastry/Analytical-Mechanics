function f = q7_recursion(x, n) 
    % Q7 ��������ʽ
    if n == 1  
        f = sqrt(1 + x);  
    else  
        f = sqrt(n + q7_recursion(x, n - 1));  
    end  
end  
  
%% 
% ���׵Ľ�����Ƶ����bվ��ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��Ƶ�ۿ���վ�� https://www.bilibili.com/video/BV1Xm41167aC/
