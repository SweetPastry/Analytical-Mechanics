function y = q1_4(x,mu,sigma)  
    if nargin < 1  % ȷ�������ṩ��x����
        error('��һ���������x�Ǳ������');
    end
    if nargin < 2  % ���muδ�ṩ��������Ĭ��ֵΪ0 
        mu = 0;
    end
    if nargin < 3  % ���sigmaδ�ṩ��������Ĭ��ֵΪ1
        sigma = 1;
    end
    y =  1 / (sqrt(2 * pi) * sigma) * ...
        exp(-((x - mu) / sigma).^2 / 2);  
end

% function y = q1_4(x,mu,sigma)  
%     if ~exist('x', 'var')
%         error('��һ���������x�Ǳ������');
%     end
%     if ~exist('mu', 'var')  % ���muδ�ṩ��������Ĭ��ֵΪ0 
%         mu = 0;
%     end
%     if ~exist('sigma', 'var')  % ���sigmaδ�ṩ��������Ĭ��ֵΪ1
%         sigma = 1;
%     end
%     y =  1 / (sqrt(2 * pi) * sigma) * ...
%         exp(-((x - mu) / sigma).^2 / 2);  
% end

% function y = q1_4(x,mu,sigma)  
%     arguments
%         x {mustBeNumeric}
%         mu (1,1) {mustBeNumeric} = 0 
%         sigma  (1,1) {mustBeNumeric} = 1 
%     end
%         y =  1 / (sqrt(2 * pi) * sigma) * ...
%             exp(-((x - mu) / sigma).^2 / 2);  
% end  
  
%% 
% ���׵Ľ�����Ƶ����bilibili����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  �ۿ���ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
