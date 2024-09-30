function a = rgb_hex(b)
% Q10 RGB颜色和十六进制颜色(HEX color)的转换
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
% 配套的讲解视频可以在b站免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  观看地址： https://www.bilibili.com/video/BV1Xm41167aC/
