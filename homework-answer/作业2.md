@import "../style.less"

# 经典力学第二次作业

## L01.23
> 单摆必须振幅很小才是作谐振动．如果要求不论振幅大小只是作谐振动, 质点应改在什么样的曲线上运动?

根据能量守恒, 可以写出以下方程, 此处设 $y=f(x)$, 有

$$
\begin{align*}
	E&=\frac{1}{2}m\frac{\mathrm{d}x^2+\mathrm{d}y^2}{\mathrm{d}t^2}+mgy
	\\\\
	&=\frac{1}{2}m\frac{\mathrm{d}x^2+{f^{\prime}}^2\left( x \right) \mathrm{d}x^2}{\mathrm{d}t^2}+mgf\left( x \right) 
	\\\\
	&=\frac{1}{2}m\left( 1+{f^{\prime}}^2\left( x \right) \right) \dot{x}^2+\frac{1}{2}2mg\frac{f\left( x \right)}{x^2}x^2.
\end{align*}
$$

为了使得这个方程解是简谐运动, 需要

$$
\frac{f(x)/x^2}{1+{f^{\prime}}^2\left( x \right)}=C.
$$

所以满足这个方程的曲线都符合题意, 其中一个解是二次曲线

$$
f(x)=ax^2.\qquad\forall a>0
$$

## L01.28
> 在塔顶上, 许多弹子以相同的初速率同时从同一地点向四面八方散去．问在其后任一时刻, 此等弹子将联成怎样的曲面?

在弹子群的质心参考系上看, 每个弹子都以相同的速率远离质心, 所以看上去弹子群都分布在半径以出射速率增大的球面上. 那么在地面参考系上看也是如此.

## L01.37
> 物体 A 和 B 质量相等, 通过弹簧相连, A 上 B 下垒于水平面上．用多大的力将 A 揿下, 放手后会使 B 跳起.

考究临界情况, 设弹簧恢复系数为 $k$, 按压深度为 $\Delta x$, 物体质量为 $m$, 重力加速度为 $g$, 那么根据简谐运动的对称性, 物体 A 反向减速到恰好静止时, 弹簧的伸长量为

$$
\Delta x^\prime = \Delta x-mg/k.
$$

所以只要

$$
k\Delta x^{\prime}=k\Delta x-mg\geqslant mg,
$$

即 $\Delta x\geqslant 2mg/k$ 即可.

## L01.42
> 手持匀质软绳的上端, 让绳自由下垂, 绳的下端恰好触及桌面, 放手任绳下落．求绳在下落过程中对桌面的压力．

设桌面压力为 $N$, 绳的线密度为 $\lambda$, 重力加速度为 $g$, 已经落在桌面上的长度为 $l$, 那么桌面上的压力由两部分组成, 第一部分为支撑已经落在桌面上的那部分绳, 第二部分为那一时刻恰好落在桌面上的那部分绳对桌面的冲击.

$$
N=\lambda lg+\lambda v\frac{\mathrm{d}l}{\mathrm{d}t}.
$$

其中 $v=\sqrt{2gl}$ 为绳子的速度, 这个结果的得到无需考虑绳桌上部分和空中部分相互作用的拉力, 因为绳子是**软的**. 所以

$$
N=3\lambda gl.
$$

若希望写成时间的函数, 代入 $l=\frac{1}{2}gt^2$ 即可:\

$$
N=\frac{3}{2}\lambda g^2t.
$$

## L01.43
> 匀质软绳全长 $l$, 单位长度质量为 $\rho$．绳盘在地面上, 绳尾系于轻气球．气球受升力 $B$ 自地面升起，求解气球的上升情况.

升力 $B$ 将被用在两个地方, 一部分是用于已经在空中的绳加速, 另一部分是让那一时刻刚升上空中的一小部分绳获得初速度. 设绳子已经在空中的部分长度为 $x$, 速度为 $v$, 于是

$$
B=\rho x\left( g+\frac{\mathrm{d}v}{\mathrm{d}t} \right) +\rho v\mathrm{d}t\cdot v\frac{1}{\mathrm{d}t}=\rho x\left( g+\frac{\mathrm{d}v}{\mathrm{d}t} \right) +\rho v^2.
$$

这个方程的解为

$$
v^2=-\frac{1}{3}gx+\frac{2}{3}\frac{B}{\rho}.
$$

如果 $gl> 2B/\rho$, 说明绳子不可能全部飞向空中, 此时在 $v^2=0$ 即 $x=2B/\rho g$ 时停止运动. 如果 $B/\rho<gl\leqslant 2B/\rho$, 说明绳子可以全部飞向空中, 但是因为绳子的重力大于升力, 绳子会在空中减速, 之后反向运动直至有一部分回到地面. 若 $gl<B/\rho$, 说明绳子重力比升力小, 离开地面后会加速 (临界时是匀速) 升向天空.