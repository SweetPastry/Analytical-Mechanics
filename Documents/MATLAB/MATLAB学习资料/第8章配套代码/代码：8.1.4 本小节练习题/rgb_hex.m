function a = rgb_hex(b)
% Q10 RGB��ɫ��ʮ��������ɫ(HEX color)��ת��
    if isnumeric(b)
      c = dec2base(b,16);
      s = pad(string(c),2,'left','0');
      a = ['#' char(join(s,''))];
    else
        tmp = reshape(erase(b,'#'),2,[])';
        a = base2dec(tmp,16)';  
    end
end  
  
%% 
% ���׵Ľ�����Ƶ������bվ��ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  �ۿ���ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
