function p = inte_test(k)
    f = @(x) (1+x) .* (cos(x)).^ k;
    p = integral(f, -pi/2, pi/2); 
    % Ҳ����д��һ�У�
    % p = integral(@(x) (1+x) .* (cos(x)).^ k, -pi/2, pi/2); 
end  
  
%% 
% ���׵Ľ�����Ƶ������bilibili����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
