function k = hailstone1(n)
% �������� 3n+1����
% ����ֵ����Ҫ�����ı仯����k
    k = 0;
    while n~= 1
        if mod(n,2) == 0
            n = n/2;
        else
            n = 3*n+1;
        end
        k = k + 1;
    end
end  
  
%% 
% ���׵Ľ�����Ƶ������bilibili����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��Ƶ�ۿ���վ�� https://www.bilibili.com/video/BV1Xm41167aC/
