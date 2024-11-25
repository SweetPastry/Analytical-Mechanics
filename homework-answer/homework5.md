@import "../style.less"

# 经典力学第五次作业


## L02.05
> 光滑钢丝弯成半径为 $R$ 的半圆竖直放置, 钢丝上穿着两个质点, 其重量分别为 $P$ 和 $Q$, 两质点由长度为 $2l$ 的不可伸长轻绳连起来,求平衡时绳与水平面的夹角.

根据几何关系得
$$
H_P=\dfrac{l}{\cos \alpha}\sin \left( \alpha -\theta \right) ,\qquad H_Q=\dfrac{l}{\cos \alpha}\sin \left( \alpha +\theta \right) ,
$$
所以体系的势能为
$$
U=\dfrac{l}{\cos \alpha}\left( -P\cos \left( \alpha -\theta \right) +Q\cos \left( \alpha +\theta \right) \right) ,
$$
根据 d'Alembert 原理
$$
\dfrac{\mathrm{d}U}{\mathrm{d}\theta}=\dfrac{l}{\cos \alpha}\left( -P\cos \left( \alpha -\theta \right) +Q\cos \left( \alpha +\theta \right) \right) =0,
$$
解得 
$$
\theta =\mathrm{arc}\tan \dfrac{\left( -P+Q \right) \cos \alpha}{\left( P+Q \right) \sin \alpha}=\mathrm{arc}\tan \dfrac{\left( -P+Q \right)}{\left( P+Q \right)}\dfrac{l}{\sqrt{R^2-l^2}}.
$$


## L02.09
> 光滑半球碗是固定的, 匀质杆长 $L$ 斜靠在碗边, 杆的下端为碗所承托, 上端则伸出碗外, 试求杆的平衡位置. 在怎样条件下才有可能平衡?

根据几何关系, $h=R-R\sin 2\theta =R\left( 1-\sin 2\theta \right)$, 于是
$$
H_{\mathrm{top}}=h+L\sin \theta ,\qquad H_{\mathrm{bot}}=h,
$$
于是
$$
H_C=\dfrac{1}{2}\left( H_{\mathrm{top}}+H_{\mathrm{bot}} \right) ,
$$
也就是
$$
V=mgH_C=mg\left[ R\left( 1-\sin 2\theta \right) +\dfrac{1}{2}L\sin \theta \right] ,
$$
根据 d'Alembert 原理,
$$
\dfrac{\mathrm{d}V}{\mathrm{d}\theta}=0\qquad \Longrightarrow \qquad 8R\cos ^2\theta -L\cos \theta -4R=0,
$$
解得
$$
\cos \theta =\dfrac{L+\sqrt{L^2+128R^2}}{16R}.
$$

这个解有物理意义, 需要满足 $\cos\theta\leqslant 1$, 也就是
$$
L\leqslant4R.
$$


## J03.08
> A bead of mass \( m \) slides without friction on a rigid wire that lies in the \( xoz \) plane and has the shape \( z = a e^{-\gamma x} \), where \( \gamma \) is some given constant. Gravity acts downwards, with \( \boldsymbol{g} = -g \boldsymbol{e}_z = -g \boldsymbol{e}_3\).
>
>**(a)** Write the full Lagrangian for this problem, and write the equations for the two holonomic constraints (几何约束), first that the mass is confined to the plane \( y = 0 \), and second that it is confined to the surface \( z = a e^{-\gamma x} \).
>
>**(b)** Write the three Lagrange equations, introducing the Lagrangian multipliers \( \lambda_1 \) and \( \lambda_2 \) as appropriate.
>
>**(c)** Use the constraints to write a reduced Lagrangian \( \tilde{L}(x, \dot{x}, t) \), with \( x \) serving as the single free coordinate.
>
>Derive the reduced generalized energy from this reduced Lagrangian, and use it to find an expression for \( \dot{x}^2 \) as a function of \( x \). (Assume that the mass is released from rest at the point \( x = 0 \).) Also use the reduced Lagrange equation to find an expression for \( \ddot{x} \) as a function of \( x \) and \( \dot{x} \).
>
>**(d)** Write an expression for the Cartesian vector force of the constraint \( \mathbf{F}^{\text{(cons)}} \) acting on the bead, expressing it as a function of \( x \) only. Check the limit of \( \mathbf{F}^{\text{(cons)}} \) as \( x \to \infty \). Is it reasonable?

### (a)
Directly write Lagrangian,
$$
L=\dfrac{1}{2}m\left( \dot{x}^2+\dot{y}^2+\dot{z}^2 \right) -mgz,
$$
and the constraint function
$$
G_1=y,\qquad G_2=z-a\mathrm{e}^{-\gamma x}.
$$

### (b) 
Lagrange equations are written like
$$
\left\{ \begin{array}{c}
	\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{x}}-\dfrac{\partial L}{\partial x}=F_{x}^{\left( \mathrm{cons} \right)},\\\\
	\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{y}}-\dfrac{\partial L}{\partial y}=F_{y}^{\left( \mathrm{cons} \right)},\\\\
	\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{z}}-\dfrac{\partial L}{\partial z}=F_{z}^{\left( \mathrm{cons} \right)},\\
\end{array} \right. 
$$
and we know the necessary and sufficient condition of virtual work equals 0,
$$
\left\{ \begin{array}{c}
	\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{x}}-\dfrac{\partial L}{\partial x}=\lambda _1\dfrac{\partial G_1}{\partial x}+\lambda _2\dfrac{\partial G_2}{\partial x},\\
	\\
	\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{y}}-\dfrac{\partial L}{\partial y}=\lambda _1\dfrac{\partial G_1}{\partial y}+\lambda _2\dfrac{\partial G_2}{\partial y},\\
	\\
	\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{z}}-\dfrac{\partial L}{\partial z}=\lambda _1\dfrac{\partial G_1}{\partial z}+\lambda _2\dfrac{\partial G_2}{\partial z},\\
\end{array} \right. 
$$
subsitude $L$ and $G$ with their expression,
$$
\left\{\begin{array}{c}
	m\ddot{x}=\lambda _2a\gamma \mathrm{e}^{-\gamma x},\\
	\\
	m\ddot{y}=\lambda _1,\\
	\\
	m\ddot{z}-mg=\lambda _2.
	\\
\end{array} \right.
$$

And with $G_1=y=0$, we have $y=0$, $\dot{y}=0$, $\ddot{y}=0$ and $\lambda_1=0$, as a result
$$
\left\{ \begin{array}{c}
	m\ddot{x}=\lambda _2a\gamma \mathrm{e}^{-\gamma x},\\
	\\
	m\ddot{z}-mg=\lambda _2.\\
\end{array} \right. 
$$

### (c)
Take constraint conditions directly into Lagrangian,
$$
\begin{align}
L&=\dfrac{1}{2}m\left( \dot{x}^2+\dot{y}^2+\dot{z}^2 \right) -mgz
\\\\
&=\dfrac{1}{2}m\left( \dot{x}^2+0+\left( -a\gamma \mathrm{e}^{-\gamma x}\dot{x} \right) ^2 \right) -mga\mathrm{e}^{-\gamma x}
\\\\
&=\dfrac{1}{2}m\left( 1+a^2\gamma ^2\mathrm{e}^{-2\gamma x} \right) \dot{x}^2-mga\mathrm{e}^{-\gamma x}
\\\\
&=\tilde{L}\left( x,\dot{x},t \right) .
\end{align}
$$
With the reduced Lagrangian, we can get reduced Hamiltonian,
$$
\tilde{H}=\dfrac{\partial \tilde{L}}{\partial \dot{x}}\dot{x}-\tilde{L}=\dfrac{1}{2}m\left( 1+a^2\gamma ^2\mathrm{e}^{-2\gamma x} \right) \dot{x}^2+mga\mathrm{e}^{-\gamma x}.
$$
Briefly prove the reduced Hamiltonian is conservive,
$$
\dfrac{\mathrm{d}\tilde{H}}{\mathrm{d}t}=\dfrac{\partial \tilde{L}}{\partial t}=0.
$$
So
$$
\tilde{H}=\tilde{H}\left( t=0 \right) =mga,
$$
as a result
$$
\dot{x}^2=\dfrac{mga-mga\mathrm{e}^{-\gamma x}}{\dfrac{1}{2}m\left( 1+a^2\gamma ^2\mathrm{e}^{-2\gamma x} \right)}=\dfrac{2ga\left( 1-\mathrm{e}^{-\gamma x} \right)}{1+a^2\gamma ^2\mathrm{e}^{-2\gamma x}}.
$$

Take the reduced Larangian into Lagrange equation,
$$
\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial \tilde{L}}{\partial \dot{x}}-\dfrac{\partial \tilde{L}}{\partial x}=0,
$$
$$
m\left( 1+a^2\gamma ^2\mathrm{e}^{-2\gamma x} \right) \ddot{x}-ma^2\gamma ^3\mathrm{e}^{-2\gamma x}\dot{x}^2-mga\gamma \mathrm{e}^{-\gamma x}=0,
$$
and we get
$$
\ddot{x}=\dfrac{a^2\gamma ^3\mathrm{e}^{-2\gamma x}\dot{x}^2+ga\gamma \mathrm{e}^{-\gamma x}}{1+a^2\gamma ^2\mathrm{e}^{-2\gamma x}}.
$$

### (d)
We can express $\lambda_2$ with $x$,
$$
\lambda _2=\dfrac{mg}{\left( 1+a^2\gamma ^2\mathrm{e}^{-2\gamma x} \right) ^2}\left( a^2\gamma ^2\mathrm{e}^{-3\gamma x}-2a^2\gamma ^2\mathrm{e}^{-2\gamma x}+2a^2\gamma ^2\mathrm{e}^{-\gamma x}+\mathrm{e}^{-\gamma x} \right) \rightarrow mg,
$$
so
$$
\boldsymbol{F}^{\left( \mathrm{cons} \right)}=\lambda _2\left( a\gamma \mathrm{e}^{-\gamma x}, 0, 1 \right) ^{\top}\rightarrow \left( 0,0,\lambda _2 \right) ^{\top}=\left( 0,0,mg \right) ^{\top}.
$$


## J03.09
> A fixed, right circular cylinder (first cylinder) of radius \( a \) lies on its side, with its symmetry axis horizontal. A hollow right circular cylinder (second cylinder) of radius \( b \) and mass \( m \) is free to roll without slipping on the first one. Assume that its symmetry axis remains aligned with that of the first cylinder.
> 
> The full Lagrangian for the second cylinder’s motion is
> \[
> L = \dfrac{1}{2} m (\dot{r}^2+r^2 \dot{\theta}^2) + \dfrac{1}{2} m b^2 \dot{\phi}^2 - m g r \cos \theta
> \]
> where \( r \) is the distance between the axes of the two cylinders, and \( b \) and \( a \) are angles shown in the figure.
> 
> Notice that \( \theta \) is the angle between vertical and a mark \( \star \) inscribed on the face of the second cylinder.
> 
> **(a)** Write the two constraint functions, \( G_1 \) expressing the constraint that the second cylinder is in contact with the first one, and \( G_2 \) expressing the condition of rolling without slipping. Assume that \( \phi = 0 \) when \( {\theta} = 0 \).
> 
> **(b)** Write a (completely) reduced Lagrangian \( L(\dot{\theta}, \theta, t) \) and use the reduced generalized energy theorem to express \( \dot{\theta} \) as a function of \( \theta \). Assume the second cylinder to be initially at rest, and at a very small distance to the right of \( \theta = 0 \).
> 
> **(c)** Use the Lagrangian given in Eq. (1) to write the three Lagrange equations, introducing Lagrange multipliers as appropriate. Find the generalized force of constraint \( Q^{\text{cons}}_r \) for the \( r \) variable and use it to find the angle \( \theta_c \), at which the rolling cylinder will lose contact with the fixed one.

### (a)
Cuz $r=a+b$, so
$$
G_1=r-(a+b).
$$

Cuz $\star$ point has no velocity in every moment so 
$$
(a+b)\dot{\theta}-b\dot{\phi}=0,
$$
with initial condition $\phi(\theta=0)=0$, as a result
$$
G_2 = (a+b)\theta-b\phi.
$$


### (b)
Take constraint conditions to get reduced Lagrangian,
$$
\begin{align}
L&=\dfrac{1}{2}m\left( \dot{r}^2+r^2\dot{\theta}^2 \right) +\dfrac{1}{2}mb^2\dot{\phi}^2-mgr\cos \theta 
\\\\
&=\dfrac{1}{2}m\left( 0+\left( a+b \right) ^2\dot{\theta}^2 \right) +\dfrac{1}{2}mb^2\dfrac{\left( a+b \right) ^2}{b^2}\dot{\theta}^2-mg(a+b)\cos \theta 
\\\\
&=m\left( a+b \right) ^2\dot{\theta}^2-mg(a+b)\cos \theta 
\\\\
&=\tilde{L}(\theta,\dot{\theta},t).
\end{align}
$$

And we can get reduced generalized energy as 
$$
\begin{align}
\tilde{H}&=\dfrac{\partial \tilde{L}}{\partial \dot{\theta}}-\tilde{L}=m\left( a+b \right) \dot{\theta}^2+mg\left( a+b \right) \cos \theta 
\\\\
&=\tilde{H}\left( \theta =0 \right) =mg\left( a+b \right) .
\end{align}
$$
As a result,
$$
\dot{\theta}=\sqrt{\dfrac{g\left( 1-\cos \theta \right)}{a+b}}.
$$

### (c)
The Lagrange equation is like
$$
\left\{ \begin{array}{c}
	\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{r}}-\dfrac{\partial L}{\partial r}=\lambda _1\dfrac{\partial G_1}{\partial r}+\lambda _2\dfrac{\partial G_2}{\partial r},\\\\
	\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{\theta}}-\dfrac{\partial L}{\partial \theta}=\lambda _1\dfrac{\partial G_1}{\partial \theta}+\lambda _2\dfrac{\partial G_2}{\partial \theta},\\\\
	\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{\phi}}-\dfrac{\partial L}{\partial \phi}=\lambda _1\dfrac{\partial G_1}{\partial \phi}+\lambda _2\dfrac{\partial G_2}{\partial \phi}.\\
\end{array} \right. 
$$
And we take expressions into
$$
\left\{ \begin{array}{c}
	m\ddot{r}-mr\dot{\theta}^2+mg\cos \theta =\lambda _1,\\\\
	2mr^2\dot{\theta}+mr^2\ddot{\theta}-mgr\sin \theta =\left( a+b \right)\lambda _2,\\\\
	mb^2\ddot{\phi}=-b\lambda _2.\\
\end{array} \right. 
$$

We know the constrait force cann be written as
$$
\begin{align}
Q_{r}^{\left( \mathrm{cons} \right)}&=\lambda _1\dfrac{\partial G_1}{\partial r}+\lambda _2\dfrac{\partial G_2}{\partial r}=m\ddot{r}-mr\dot{\theta}^2+mg\cos \theta 
\\\\
&=mg\left( -1+2\cos \theta \right) .
\end{align}
$$

Let $Q_{r}^{\left( \mathrm{cons} \right)}=0$ and $\theta_c=\dfrac{\pi}{3}.$

## J03.10

### (a)
Let's write down the full Lagrangian,
$$
L=\dfrac{1}{2}m\left( \dot{x}^2+\dot{z}^2 \right) -mgz,
$$
and subsitute $z$ with constraint condition,
$$
\tilde{L}=\dfrac{1}{2}m\left( 1+4b^2x^2 \right) \dot{x}^2-mga+mgbx^2.
$$ 

The Lagrangian generalized by reduced Lagrangian is
$$
\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial \tilde{L}}{\partial \dot{x}}-\dfrac{\partial \tilde{L}}{\partial x}=0,
$$
is equivalent to
$$
\left( 1+4b^2x^2 \right) \ddot{x}+4b^2x\dot{x}^2-2gbx=0.
$$

The reduced generalized energy is
$$
\begin{align}
\tilde{H}&=\dfrac{\partial \tilde{L}}{\partial \dot{x}}\dot{x}-\tilde{L}=\dfrac{1}{2}m\left( 1+4b^2x^2 \right) \dot{x}^2+mga-mgbx^2
\\\\
&=\tilde{H}\left( t=0 \right) =\dfrac{1}{2}mv_0^2+mga,
\end{align}
$$
the conservation is supported by $\dfrac{\mathrm{d}\tilde{H}}{\mathrm{d}t}=\dfrac{\partial \tilde{L}}{\partial t}=0$, and
$$
\dot{x}^2=\dfrac{v_0^2+2gbx^2}{1+4b^2x^2}.
$$

In order to derived generalized constraint force we have to use full Lagrangian,
$$
\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{x}}-\dfrac{\partial L}{\partial x}=F_{x}^{\left( \mathrm{cons} \right)}=\lambda \dfrac{\partial G}{\partial x},
$$
that is
$$
m\ddot{x}=2\lambda bx,
$$
so $\lambda =\dfrac{m\ddot{x}}{2bx}=\dfrac{mg}{\left( 1+4b^2x^2 \right) ^2}$, as a result
$$
\boldsymbol{F}_{x}^{\left( \mathrm{cons} \right)}=\dfrac{m(g-2bv_0^2)}{\left( 1+4b^2x^2 \right) ^2}\nabla G=\dfrac{m(g-2bv_0^2)}{\left( 1+4b^2x^2 \right) ^2}\left( 2bx,0,1 \right) ^{\top}.
$$

### (b)
Let $g-2bv_0^2=0$, and
$$
v_0=\sqrt{\dfrac{g}{2b}}.
$$


## J03.07
> A single mass \( m \) slides without friction on the outside surface of a sphere of radius \( a \). Suppose that at \( t = 0 \), it has spherical polar coordinates \( \theta_0 > 0 \), \( \phi_0 = 0 \), and generalized velocities \( \dot{\theta}_0 = 0 \) and \( \dot{\phi}_0 > 0 \).
> 
> **(a)** Using spherical polar coordinates, write both the full Lagrangian and the reduced Lagrangian for this problem.
> 
> "full" 和 "reduced" 分别指定控制角日中没有消去和消去冗限坐标 \( \theta(t) \), \( \phi(t) \) 情况.
> 
> **(b)** Write the Lagrange equations for both the full and the reduced Lagrangian.
> 
> **(c)** Use the reduced Lagrangian \( \tilde{L} \) to write the reduced generalized energy \( H_q \).
> 
> **(d)** The mass will leave the surface of the sphere at the instant at which the normal force of the constraint becomes negative. Write an expression for the angle \( \theta_{\text{max}} \) at which the mass leaves the sphere.
> 
> **(e)** Define the parameter \( \gamma \) by \( a \dot{\phi}_0^2 = \gamma g \), where \( g \) is the acceleration of gravity. Express \( \theta_{\text{max}} \) as a function of \( a \), \( g \), \( \gamma \), and \( \theta_0 \) only.
> 
> In the case with \( \gamma = 0 \), find \( \theta_{\text{max}} \) in the limit of \( \theta_0 \to 0 \).
> 
> **(f)** With \( \theta_0 = 10^\circ \), find the numerical value of \( \theta_{\text{max}} \) for the case in which \( \gamma = 0 \).
> 
> How big would \( \gamma \) have to be in order to reduce \( \theta_{\text{max}} \) to \( 45^\circ \)?

### (aB)
The full Lagrangian is
$$
L=\dfrac{1}{2}m\left( \dot{r}^2+r^2\dot{\theta}^2+r^2\sin ^2\theta \dot{\phi}^2 \right) -mgr\cos \theta ,
$$
and we can use this to derive full Lagrange equations,
$$
\left\{ \begin{array}{c}
	\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{r}}-\dfrac{\partial L}{\partial r}=\lambda \dfrac{\partial G}{\partial r},\\\\
	\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{\theta}}-\dfrac{\partial L}{\partial \theta}=\lambda \dfrac{\partial G}{\partial \theta},\\\\
	\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{\phi}}-\dfrac{\partial L}{\partial \phi}=\lambda \dfrac{\partial G}{\partial \phi}.\\
\end{array} \right. 
$$
The constraint function $G=r-a$. Take expressions into and we get
$$
\left\{ \begin{array}{c}
	m\ddot{r}-mr\dot{\theta}^2-mr\sin ^2\theta \dot{\phi}^2+mg\cos \theta =\lambda,\\
	\dfrac{\mathrm{d}}{\mathrm{d}t}\left( mr^2\dot{\theta} \right) -mr^2\sin \theta \cos \theta \dot{\phi}^2-mgr\sin \theta =2mr\dot{r}\dot{\theta}+mr^2\ddot{\theta}-mr^2\sin \theta \cos \theta \dot{\phi}^2-mgr\sin \theta =0,\\
	\dfrac{\mathrm{d}}{\mathrm{d}t}\left( mr^2\sin ^2\theta \dot{\phi} \right) =2mr\dot{r}\sin ^2\dot{\phi}+2mr^2\sin \theta \cos \theta \dot{\theta}\dot{\phi}+mr^2\sin ^2\theta \ddot{\phi}=0.\\
\end{array} \right. 
$$

Let $r=a$ and derive
$$
\left\{ \begin{array}{c}
	-ma\dot{\theta}^2-ma\sin ^2\theta \dot{\phi}^2+mg\cos \theta =\lambda,\\
	ma^2\ddot{\theta}-ma^2\sin \theta \cos \theta \dot{\phi}^2-mga\sin \theta =0,\\
	2ma^2\sin \theta \cos \theta \dot{\theta}\dot{\phi}+ma^2\sin ^2\theta \ddot{\phi}=0.\\
\end{array} \right. 
$$

But if subsetute variables with constraint advant $\tilde{L}=\frac{1}{2}m\left( \dot{\theta}^2+\sin ^2\theta \dot{\phi}^2 \right) a^2-mga\cos \theta$, we derive reduced Lagrangian,
$$
\left\{ \begin{array}{c}
		\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial \tilde{L}}{\partial \dot{\theta}}-\dfrac{\partial \tilde{L}}{\partial \theta}=0,\\
	\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial \tilde{L}}{\partial \dot{\phi}}-\dfrac{\partial \tilde{L}}{\partial \phi}=0.\\
\end{array} \right. 
$$
$$
\left\{ \begin{array}{c}
	ma^2\ddot{\theta}-ma^2\sin \theta \cos \theta \dot{\phi}^2-mga\sin \theta =0,\\
	\dfrac{\mathrm{d}}{\mathrm{d}t}\left( m\sin ^2\theta \dot{\phi} \right) =2m\sin \theta \cos \theta \dot{\theta}\dot{\phi}+m\sin ^2\theta \ddot{\phi}=0.\\
\end{array} \right. 
$$

### (c)
$$
\tilde{H}_q=\frac{1}{2}m\left( \dot{\theta}^2+\sin ^2\theta \dot{\phi}^2 \right) a^2+mg\mathrm{a}\cos \theta .
$$

### (d)
For the reason $\frac{\mathrm{d}}{\mathrm{d}t}\tilde{H}_q=\frac{\partial}{\partial t}\tilde{L}=0$ we have
$$
\frac{1}{2}m\left( \dot{\theta}^2+\sin ^2\theta \dot{\phi}^2 \right) a^2+mg\mathrm{a}\cos \theta =\frac{1}{2}ma^2\sin ^2\theta _0\dot{\phi}_{0}^{2}+mga\cos \theta _0.
$$
Delete $\dot{\phi^2}$ we get
$$
Q_{r}^{\left( \mathrm{cons} \right)}=\lambda =-3mg\cos \theta +2mg\cos \theta _0-ma\sin ^2\theta _0\dot{\phi}_{0}^{2}\triangleq 0,
$$
and
$$
\theta _{\max}=\mathrm{arc}\cos \frac{2g\cos \theta _0+a\dot{\phi}_{0}^{2}\sin ^2\theta _0}{3g}.
$$


### (e)
We have
$$
\theta _{\max}=\mathrm{arc}\cos \frac{2\cos \theta _0+\gamma \sin ^2\theta _0}{3}.
$$
Let $\gamma=0$,
$$
\theta _{\max}=\mathrm{arc}\cos \frac{2\cos \theta _0}{3},
$$
and 
$$
\theta _{\max}=\mathrm{arc}\cos \frac{2}{3}.\qquad (\theta_0\to0^+)
$$

### (f)
$$
\frac{1}{\sqrt{2}}=\frac{2\cos 10°+\gamma \sin ^210°}{3},
$$
so $\gamma=5.03°$.



### Rayleigh 耗散势
> 质点受到正比于速度的阻尼力 \( \vec{F}_i = -k_i \vec{v}_i \) (常数 \( k_i \geq 0 \)),其中 \( \vec{v}_i \) 为相对于阻尼背景的速度. 
> 
> 这种力可视为非保守力写在拉格朗日方程的右边,也可以引入瑞利耗散势 \( \mathcal{F}_i = \frac{1}{2} k_i v_i^2 \) 描述. 
> 
> 阻尼力 \( \vec{F}_i = - \nabla_{v_i} \mathcal{F} = -\frac{\partial \mathcal{F}}{\partial v_{ix}} \hat{e}_x - \frac{\partial \mathcal{F}}{\partial v_{iy}} \hat{e}_y - \frac{\partial \mathcal{F}}{\partial v_{iz}} \hat{e}_z \). 此外质点还受到势为 \( V(r) \) 的保守力的作用. 
> 
> **(a)** 试在 \( s \)-系中写出以非保守力形式呈现的拉格朗日方程：
> 
> **(b)** 试在 \( s \)-系中写出以瑞利耗散势形式呈现的拉格朗日方程：
> 
> **(c)** 试证明在任意广义坐标 \( q_i \)-系中,修正的拉格朗日方程为 
> \[
> \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}_a} \right) - \frac{\partial L}{\partial q_a} + \frac{\partial \mathcal{F}}{\partial \dot{q}_a} = 0,
> \]
> 注意耗散势并未进入拉格朗日量,只是在拉格朗日方程中多出一项. 
> 
> **(d)** 引入瑞利耗散势的优点是拉格朗日方程具有协变性. 试利用瑞利耗散势写出受到正比于速度的阻尼力的单质点的拉格朗日方程. 

### (a)
一般地, Lagrange 量写作
$$
L=\frac{1}{2}m\left( \dot{x}^2+\dot{y}^2+\dot{z}^2 \right) -V\left( \boldsymbol{r} \right) ,
$$
那么
$$
\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial \dot{\boldsymbol{r}}}-\frac{\partial L}{\partial \boldsymbol{r}}=\boldsymbol{F}.
$$

### (b)
改写右侧的 Rayleigh 阻尼力,
$$
\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial \dot{\boldsymbol{r}}}-\frac{\partial L}{\partial \boldsymbol{r}}=-\frac{\partial \mathcal{F}}{\partial \dot{\boldsymbol{r}}}.
$$

### (c)
将 Lagrange 方程同时乘以坐标变换算符,
$$
\sum_{\beta =1}^d{\left( \frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial \dot{r}_{\beta}} \right) \frac{\partial r_{\beta}}{\partial \boldsymbol{q}}}-\sum_{\beta =1}^d{\frac{\partial L}{\partial r_{\beta}}\frac{\partial r_{\beta}}{\partial \boldsymbol{q}}}=-\sum_{\beta =1}^d{\frac{\partial \mathcal{F}}{\partial \dot{r}_{\beta}}\frac{\partial r_{\beta}}{\partial \boldsymbol{q}}},
$$
然后对于第一项的求导运算做调整,
$$
\frac{\mathrm{d}}{\mathrm{d}t}\sum_{\beta =1}^d{\left( \frac{\partial L}{\partial \dot{r}_{\beta}}\frac{\partial r_{\beta}}{\partial \boldsymbol{q}} \right)}-\sum_{\beta =1}^d{\left( \frac{\partial L}{\partial \dot{r}_{\beta}}\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial r_{\beta}}{\partial \boldsymbol{q}}+\frac{\partial L}{\partial r_{\beta}}\frac{\partial r_{\beta}}{\partial \boldsymbol{q}} \right)}=-\sum_{\beta =1}^d{\frac{\partial \mathcal{F}}{\partial \dot{r}_{\beta}}\frac{\partial r_{\beta}}{\partial \boldsymbol{q}}},
$$
利用点点消去以及对位置的偏导数与对时间的全导数可以交换顺序, 得到
$$
\frac{\mathrm{d}}{\mathrm{d}t}\sum_{\beta =1}^d{\left( \frac{\partial L}{\partial \dot{r}_{\beta}}\frac{\partial \dot{r}_{\beta}}{\partial \dot{\boldsymbol{q}}} \right)}-\sum_{\beta =1}^d{\left( \frac{\partial L}{\partial \dot{r}_{\beta}}\frac{\partial \dot{r}_{\beta}}{\partial \boldsymbol{q}}+\frac{\partial L}{\partial r_{\beta}}\frac{\partial r_{\beta}}{\partial \boldsymbol{q}} \right)}=-\sum_{\beta =1}^d{\frac{\partial \mathcal{F}}{\partial \dot{r}_{\beta}}\frac{\partial \dot{r}_{\beta}}{\partial \dot{\boldsymbol{q}}}},
$$
这就是
$$
\frac{\partial L}{\partial \dot{\boldsymbol{q}}}-\frac{\partial L}{\partial \boldsymbol{q}}=-\frac{\partial \mathcal{F}}{\partial \dot{\boldsymbol{q}}}.
$$


### (d)
系统的 Lagrange 量为 $L=\frac{1}{2}ml^2\dot{\theta}^2+mgl\cos \theta$, Rayleigh 散射势为 $F=\frac{1}{2}kl^2\dot{\theta}^2$, 代入方程得到
$$
ml^2\ddot{\theta}+kl^2\dot{\theta}+mgl\sin \theta =0.
$$