function d = qftest_vector(p, q)
% qftest_vector�������������ȳ�����ֵ����p��q��Ϊ����  
% ���Ὣp��q����ͬλ�õ�Ԫ�سɶԵش��ݵ�qftest�����н��м���
% ������һ������������p��q�ȳ�������d  
% ����d�е�ÿ��Ԫ�ض��Ƕ�Ӧλ�õ�p��qԪ����qftest�����м���Ľ��
    n = length(p);
    d = zeros(size(p));
    for ii = 1:n
        d(ii) = qftest(p(ii), q(ii));
    end
end  
  
%% 
% ���׵Ľ�����Ƶ������bilibili����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  �ۿ���ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
