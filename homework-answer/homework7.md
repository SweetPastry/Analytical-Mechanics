@import "../style.less"

# 第 7 次作业解答

## L01.08

光行走的时间为
$$
t=\int_{\beta _1}^{\beta _2}{ \dfrac{n\mathrm{d}s\left( \beta \right)}{c}}= \dfrac{n_0y_0}{c}\int_{\beta _1}^{\beta _2}{ \dfrac{\sqrt{\dot{x}^2+\dot{y}^2}}{y}}\mathrm{d}\beta .
$$
时间取得极值 $\delta t=0$ 的充分必要条件是
$$
 \dfrac{\mathrm{d}}{\mathrm{d}\beta} \dfrac{\partial F}{\partial \dot{x}}- \dfrac{\partial F}{\partial x}=0,\qquad F= \dfrac{\sqrt{\dot{x}^2+\dot{y}^2}}{y},
$$
关于 $y$ 的方程可以由上式导出, 因为 $F$ 是关于 $\dot{x},\dot{y}$ 的其一次方程. 因为 $F$ 不显含 $\dot{x}$, 所以 $x$ 是可遗坐标, 因此
$$
 \dfrac{\partial F}{\partial \dot{x}}=C,\qquad  \dfrac{\dot{x}}{y} \dfrac{1}{\sqrt{\dot{x}^2+\dot{y}^2}}=C.
$$
解得
$$
\left( x-C_1 \right) ^2+y^2=C_{2}^{2},
$$
$C_1,C_2$ 是待定常数, 根据光的出射位置和方向决定.

## L08.05

曲面面积的表达式是
$$
S=\int_{\beta _1}^{\beta _2}{2\pi y\mathrm{d}s\left( \beta \right)}=2\pi \int_{\beta _1}^{\beta _2}{y\sqrt{\dot{x}^2+\dot{y}^2}\mathrm{d}\beta},
$$
曲面面积取极值 $\delta S=0$ 的充分必要条件是
$$
 \dfrac{\mathrm{d}}{\mathrm{d}\beta} \dfrac{\partial F}{\partial \dot{x}}- \dfrac{\partial F}{\partial x}=0,\qquad F={y}\sqrt{\dot{x}^2+\dot{y}^2},
$$
关于 $y$ 的方程可以由上式导出, 因为 $F$ 是关于 $\dot{x},\dot{y}$ 的其一次方程. 因为 $F$ 不显含 $\dot{x}$, 所以 $x$ 是可遗坐标, 因此
$$
 \dfrac{\partial F}{\partial \dot{x}}=C,\qquad  \dfrac{y\dot{x}}{\sqrt{\dot{x}^2+\dot{y}^2}}=C.
$$
解得
$$
y= \dfrac{1}{C_1}\mathrm{sh}\left( C_1x+C_2 \right) ,
$$
$C_1,C_2$ 是待定常数, 根据点的位置决定.

## J05.06

### (a)

The arc length derived from every possible curve is expressed as
$$
S=\int_{\beta _1}^{\beta _2}{\mathrm{d}s\left( \beta \right)}=\int_{\beta _1}^{\beta _2}{\sqrt{\dot{r}^2+r^2\dot{\theta}^2+\dot{z}^2}\mathrm{d}\beta}=\int_{\beta _1}^{\beta _2}{\sqrt{a^2\dot{\theta}^2+\dot{z}^2}\mathrm{d}\beta}.
$$
The sufficent and neccersary condition of $\delta S=0$ is
$$
\begin{cases}
	 \dfrac{\mathrm{d}}{\mathrm{d}\beta} \dfrac{\partial F}{\partial \dot{\theta}}- \dfrac{\partial F}{\partial \theta}=0\\\\
	 \dfrac{\mathrm{d}}{\mathrm{d}\beta} \dfrac{\partial F}{\partial \dot{z}}- \dfrac{\partial F}{\partial z}=0\\
\end{cases},\qquad F=\sqrt{a^2\dot{\theta}^2+\dot{z}^2}.
$$

Notice that the $\theta$ and $z$ are both ignorable coordinates, so
$$
\begin{cases}
	 \dfrac{\partial F}{\partial \dot{\theta}}=C_1\\\\
	 \dfrac{\partial F}{\partial \dot{z}}=C_2\\
\end{cases},\qquad \begin{cases}
	 \dfrac{a^2\dot{\theta}}{\sqrt{a^2\dot{\theta}^2+\dot{z}^2}}=C_1\\
	 \dfrac{\dot{z}}{\sqrt{a^2\dot{\theta}^2+\dot{z}^2}}=C_2\\
\end{cases}.     
$$

### (b)

If we choose $\beta=s$, we have
$$
\begin{cases}
	a^2\dot{\theta}=C_1\\\\
	\dot{z}=C_2\\
\end{cases}.
$$
As a result,
$$
\begin{cases}
	\theta =\dfrac{C_1}{a^2}s+\theta _0\\\\
	z=C_2s+z_0\\
\end{cases}.
$$
The argument $\theta_0$ and $z_0$ are determinated by start point's position, the $C_1$ and $C_2$ is based on the end point.

### (c)

First, let $\theta_0=0$ and $z_0=0$, and we are going to figure out $C_1$ and $C_2$. Let $\theta=2\pi$ and $z=h$ and $s=\sqrt{(2\pi a)^2+h^2}$ we have the equation on cylinder surface.
$$
\,\,\begin{cases}
	C_1=\dfrac{2\pi a^2}{\sqrt{\left( 2\pi a \right) ^2+h^2}}\\\\
	C_2=\dfrac{h}{\sqrt{\left( 2\pi a \right) ^2+h^2}}\\
\end{cases}.
$$

Then, we consider plattened suiface, let $x=a\theta$ and the equation on the plane is
$$
z=\dfrac{h}{2\pi a}x=\dfrac{h}{2\pi}\theta ,
$$
that is definately the same equation in cylinder.


## J05.09

### (1) {#1}

We can easily write down the work of gravity as 
$$
W_G=\dfrac{GMm}{2R^3}\left( R_{e}^{2}-r^2 \right) ,
$$
so we have
$$
t=\int_{\beta _1}^{\beta _2}{\dfrac{\mathrm{d}s\left( \beta \right)}{v}}=\int_{\beta _1}^{\beta _2}{\dfrac{\sqrt{\dot{x}^2+\dot{y}^2}\mathrm{d}\beta}{\sqrt{\dfrac{GM}{R^3}\left( R_{e}^{2}-r^2 \right)}}}=\sqrt{\dfrac{R^3}{GM}}\int_{\beta _1}^{\beta _2}{\sqrt{\dfrac{\dot{x}^2+\dot{y}^2}{R_{e}^{2}-r^2}}\mathrm{d}\beta}.
$$

The Euler-Lagrange equations are
$$
\dfrac{\mathrm{d}}{\mathrm{d}\beta}\dfrac{\partial F}{\partial \dot{x}}-\dfrac{\partial F}{\partial x}=0,\qquad \dfrac{\mathrm{d}}{\mathrm{d}\beta}\dfrac{\partial F}{\partial \dot{y}}-\dfrac{\partial F}{\partial y}=0,\qquad F=\sqrt{\dfrac{\dot{x}^2+\dot{y}^2}{R_{e}^{2}-r^2}},\qquad r^2=x^2+y^2.
$$
Expand them,
$$
\dfrac{\mathrm{d}}{\mathrm{d}\beta}\left( \dfrac{\dot{x}}{\sqrt{\left( R_{e}^{2}-x^2-y^2 \right) \left( \dot{x}^2+\dot{y}^2 \right)}} \right) -\sqrt{\dfrac{\dot{x}^2+\dot{y}^2}{R_{e}^{2}-x^2-y^2}}\dfrac{x}{R_{e}^{2}-x^2-y^2}=0,
$$
$$
\dfrac{\mathrm{d}}{\mathrm{d}\beta}\left( \dfrac{\dot{y}}{\sqrt{\left( R_{e}^{2}-x^2-y^2 \right) \left( \dot{x}^2+\dot{y}^2 \right)}} \right) -\sqrt{\dfrac{\dot{x}^2+\dot{y}^2}{R_{e}^{2}-x^2-y^2}}\dfrac{y}{R_{e}^{2}-x^2-y^2}=0.
$$

### (2) {#2}

We can verify that 
$$
\begin{cases}
	\beta =\eta\\\\
	x=\left( R-a \right) \cos \eta +a\cos \left( \dfrac{R-a}{a}\eta \right)\\\\
	y=\left( R-a \right) \sin \eta -a\sin \left( \dfrac{R-a}{a}\eta \right)\\
\end{cases}
$$
satisfy the Euler-Lagrange equation if $R=R_e$.

### (3) {#3}

Let
$$
x^2+y^2=R_e^2,
$$
and $\eta=\frac{2\pi a}{R}$. So $S=2\pi a=D$ and $a=\frac{D}{2\pi}$, what more
$$
h_\mathrm{max} = R_e-\sqrt{\min \left\{ x^2+y^2 \right\}}=2a=\frac{D}{\pi}.
$$
Based on it
$$
t=\sqrt{\frac{{R_e}^3}{GM}}\int_0^{2a\pi /R}{\sqrt{\frac{\dot{x}^2+\dot{y}^2}{R_{e}^{2}-r^2}}\mathrm{d}\eta}=\sqrt{\frac{{R_e}^3}{GM}}\frac{D}{R}\sqrt{\frac{2\pi R}{D}-1}.
$$

### (4)

$$
\frac{d}{ds}\left( \frac{\hat{\boldsymbol{\tau}}}{\sqrt{R^2-r^2}} \right) -\frac{\boldsymbol{r}}{(R_{e}^{2}-r^2)^{3/2}}=0.
$$
Here we have
$$
\sqrt{\dot{x}^2+\dot{y}^2}=1,\qquad \dot{x}\hat{\boldsymbol{x}}+\dot{y}\hat{\boldsymbol{y}}=\hat{\tau}.
$$