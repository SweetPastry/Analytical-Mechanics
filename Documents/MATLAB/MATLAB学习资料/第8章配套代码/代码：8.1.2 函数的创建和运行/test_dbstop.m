function z = test_dbstop(x,y,o)
    n = length(o);
    z = zeros(1,n);
    for ii = 1:n
        z(ii) = qftest2(x(ii),y(ii),o(ii));
    end
    % �㻹���Բ������´���
    % x//y
    % x*y
    % x||y
    % x#y
end  
  
%% 
% ���׵Ľ�����Ƶ����bilibili����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
