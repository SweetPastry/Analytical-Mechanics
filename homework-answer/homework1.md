@import "../style.less"


# 经典力学第一次作业

## L01.06
> 质点在平面上运动, 速度矢量与加速度矢量的夹角 $\alpha$ 保持不变．试证, 在此情况下，$v\mathrm{e}^{\theta \cot\alpha}=$常数，这里 $v$ 是速率，$\theta$ 是轨道切线的方位角.

将加速度矢量分解后可以得到关系：

$$
 \dfrac{\mathrm{d}v}{\mathrm{d}t}=a\cos \alpha ,\tag{1}
$$

$$
v\mathrm{d}\theta =a\sin \alpha \mathrm{d}t.\tag{2}
$$

将 (1) 恒等变形为:

$$
 \dfrac{1}{v} \dfrac{\mathrm{d}v}{\mathrm{d}t}- \dfrac{a\sin \alpha}{v}\cot \alpha =0.
$$

代入 (2) 就得到了

$$
 \dfrac{1}{v} \dfrac{\mathrm{d}v}{\mathrm{d}t}- \dfrac{\mathrm{d}\theta}{\mathrm{d}t}\cot \alpha =0.
$$

积分后就得到了需要证明的方程.

## L01.07

> 质点在平面上运动, 速度的 $x$ 分量 $v_xx$ 保持不变, 试证加速度 $a= \dfrac{v^3}{v_xR}$, 其中 $R$ 为曲率半径.

由 Descartes 坐标系下的加速度表达式:

$$
\boldsymbol{a}=\dfrac{\mathrm{d}v_x}{\mathrm{d}t}\hat{x}+\dfrac{\mathrm{d}v_y}{\mathrm{d}t}\hat{y}=\dfrac{\mathrm{d}v_y}{\mathrm{d}t}\hat{y}.
$$

与此同时, 加速度又可以写成:

$$
\boldsymbol{a}= \dfrac{\mathrm{d}v}{\mathrm{d}t}\hat{\tau}+ \dfrac{v^2}{R}\hat{n}.
$$

两个表达式恒等, 于是

$$
\left(\dfrac{\mathrm{d}v_y}{\mathrm{d}t}\right)^2=\left( \dfrac{\mathrm{d}v}{\mathrm{d}t}\right)^2+\left( \dfrac{v^2}{R}\right)^2.
$$

下面做一个微分的恒等变换推导

$$
 \dfrac{\mathrm{d}v_y}{\mathrm{d}x}= \dfrac{\mathrm{d}}{\mathrm{d}t}\sqrt{v^2-v_x^2}= \dfrac{1}{2} \dfrac{2v}{\sqrt{v^2-v_x^2}} \dfrac{\mathrm{d}v}{\mathrm{d}t}= \dfrac{v}{v_y} \dfrac{\mathrm{d}v}{\mathrm{d}t}.
$$

于是

$$
\left( \dfrac{v}{v_y} \dfrac{\mathrm{d}v}{\mathrm{d}t}\right)^2=\left( \dfrac{\mathrm{d}v}{\mathrm{d}t}\right)^2+\left( \dfrac{v^2}{R}\right)^2.
$$

解得

$$
\left( \dfrac{\mathrm{d}v}{\mathrm{dt}}\right)^2=\dfrac{\left( \dfrac{v^2}{R}\right)^2}{\left( \dfrac{v}{v_y}\right)^2-1}.
$$

所以

$$
a^2=\left(\dfrac{\mathrm{d}v_y}{\mathrm{d}t}\right)^2=\left( \dfrac{v}{v_y} \dfrac{\mathrm{d}v}{\mathrm{d}t}\right)^2= \dfrac{v^2}{v_y^2}\dfrac{\left( \dfrac{v^2}{R}\right)^2}{\left( \dfrac{v}{v_y}\right)^2-1}= \dfrac{1}{R^2} \dfrac{v^6}{v^2-v_y^2}= \dfrac{1}{R^2} \dfrac{v^6}{v_x^2}.
$$

所以

$$
a= \dfrac{v^3}{Rv_x}.
$$

## L01.08

> 质点作平面运动, 其加速度矢量 $a$ 始终通过某个定点 $O$．试证 $a=v \dfrac{\mathrm{d}v}{\mathrm{d}\rho}$，其中 $ρ$ 是质点与 $O$ 的距离.

取 $O$ 是极坐标系的极点, 然后写出速度和加速度的表达式:

$$
\boldsymbol{v}=\dot{r}\hat{r}+r\dot{\theta}\hat{\theta},
$$

$$
\begin{align*}
\boldsymbol{a}&=\left(\ddot{r}-r\dot{\theta}^2\right)\hat{r}+\left(r\ddot{\theta}+2\dot{r}\dot{\theta}\right)\hat{\theta}
\\
&=\left(\ddot{r}-r\dot{\theta}^2\right)\hat{r}.
\end{align*}
$$

同时有 $r\ddot{\theta}+2\dot{r}\dot{\theta}=0$, 然后

$$
v^2=\dot{r}^2+r^2\dot{\theta}^2,
$$

$$
\begin{align*}
 \dfrac{1}{2} \dfrac{\mathrm{d}v^2}{\mathrm{d}r}&= \dfrac{1}{2}\left(2\dot{r} \dfrac{\mathrm{d}\dot{r}}{\mathrm{d}r}+2r\dot{\theta}^2+2r^2\dot{\theta} \dfrac{\mathrm{d}\dot{\theta}}{\mathrm{d}r}\right)
\\
&= \dfrac{\mathrm{d}r}{\mathrm{d}t} \dfrac{\mathrm{d}\dot{r}}{\mathrm{d}r}+r\dot{\theta}^2+r^2\dot{\theta} \dfrac{\mathrm{d}\dot{\theta}}{\mathrm{d}t} \dfrac{\mathrm{d}t}{\mathrm{d}r}
\\
&=\ddot{r}+r\dot{\theta}^2+r^2\dot{\theta} \dfrac{\ddot{\theta}}{\dot{r}}
\\
&=\ddot{r}+r\dot{\theta}^2-r^2\dot{\theta} \dfrac{1}{\dot{r}} \dfrac{2\dot{r}\dot{\theta}}{r}
\\
&=\ddot{r}-r\dot{\theta}^2=a.
\end{align*}
$$

这就得证了.


## L01.16

> 质点沿光滑抛物线 $y^2=2x$ 无初速滑下, 质点初始坐标为 $(2, 2)$. 问质点在何处脱离抛物线.

根据高等数学知识, 曲率半径可以写成

$$
R=\dfrac{\left(1+\left(\mathrm{d}x/\mathrm{d}y\right)^2\right)^{3/2}}{\left|\mathrm{d}x/\mathrm{d}y\right|}=(1+y^2)^{3/2}.
$$

设脱离处在 $y$ 处, 那么

$$
a_n= \dfrac{v^2}{R}= \dfrac{2g(2-y)}{(1+y^2)^{3/2}}.
$$

向心加速度由重力加速度的分量提供:

$$
a_n=g\cos\arctan \dfrac{\mathrm{d}y}{\mathrm{d}x}= \dfrac{gy}{\sqrt{1+y^2}}.
$$

联立解得, 只取合理的解:

$$
y=1.
$$
