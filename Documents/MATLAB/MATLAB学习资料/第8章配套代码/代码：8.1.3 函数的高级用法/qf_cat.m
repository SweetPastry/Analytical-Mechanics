function d = qf_cat(dim, varargin)
% ���ڲ���c��ʹ�÷���
% ʵ��cat�����Ĳ��ֹ���
    % c = varargin;
    if isempty(varargin)
        error('������Ҫһ������ƴ�ӵ�����')
    end
    if dim == 1  
        d = vertcat(varargin{:});
    elseif dim == 2
        d = horzcat(varargin{:});
    else
        error('��һ���������Ϊ1��2')
    end
end  
  
%% 
% ���׵Ľ�����Ƶ��ҿ���bվ����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  �ۿ���ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
