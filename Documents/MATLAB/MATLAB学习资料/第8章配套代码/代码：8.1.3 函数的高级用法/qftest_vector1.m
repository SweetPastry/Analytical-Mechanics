function d = qftest_vector1(p, q)
% �����������
    n = length(p);
    d = zeros(size(p));
    for ii = 1:n
        d(ii) = qftest1(p(ii), q(ii));
    end
end
% �������qftest1�������Ǿֲ�����
function z = qftest1(x, y)
    a = x + y;
    b = x - y;
    z = a^2 + b^2;
end



% function d = qftest_vector1(p, q)
% % ���������������һС�ڼ�������
% % p��q�������ȳ��ȵ�����
%     n = length(p);
%     d = zeros(size(p));
%     for ii = 1:n
%         a = p(ii) + q(ii);
%         b = p(ii) - q(ii);
%         d(ii) = a^2 + b^2;
%     end
% end  
  
%% 
% ���׵Ľ�����Ƶ����bվ����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��Ƶ�ۿ���վ�� https://www.bilibili.com/video/BV1Xm41167aC/
