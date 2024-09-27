# 经典力学第三次作业

## J02.05
> Suppose that two masses have a motion defined by a Lagrangian function $$L=\frac{1}{2}m_1{\vec{\boldsymbol{v}}_1}^2+\frac{1}{2}m_2{\vec{\boldsymbol{v}}_2}^2-U\left( \left| \vec{\boldsymbol{r}}_1-\vec{\boldsymbol{r}}_2 \right| \right) $$ where $\vec{\boldsymbol{r}}_1$ and $\vec{\boldsymbol{r}}_1$ denote the position vectors of masses 1 and 2, respectivley, $$\vec{\boldsymbol{v}}_1=\frac{\mathrm{d}\vec{\boldsymbol{r}}_1}{\mathrm{d}t},\qquad \vec{\boldsymbol{v}}_2=\frac{\mathrm{d}\vec{\boldsymbol{r}}_2}{\mathrm{d}t},\qquad \vec{\boldsymbol{v}}_{1}^{2}=\vec{\boldsymbol{v}}_1\cdot \vec{\boldsymbol{v}}_1,\qquad \vec{\boldsymbol{v}}_{2}^{2}=\vec{\boldsymbol{v}}_2\cdot \vec{\boldsymbol{v}}_2.$$ Let $\vec{\boldsymbol{r}}=\vec{\boldsymbol{r}}_2-\vec{\boldsymbol{r}}_1,\quad \vec{\boldsymbol{R}}=\dfrac{m_2\vec{\boldsymbol{r}}_2-m_1\vec{\boldsymbol{r}}_1}{m_1+m_2}$
> (a) Rewrite the Lagrangian in terms of the variables \( \vec{r} \) and \( \vec{R} \) and their time derivatives.  
> Show the Lagrangian can be written as two terms, one of which depends only on \( \vec{R} \) and its time derivative  
> and the other only on \( \vec{r} \) and its time derivative. Such Lagrangian systems are called separable.
> (b) Show that three components of \( \vec{R} \) are ignorable coordinates and that the total momentum of the system is conserved.

### (a) 
We can express $\vec{\boldsymbol{r}}_1$ and $\vec{\boldsymbol{r}}_2$ with $\vec{\boldsymbol{r}}$ and $\vec{\boldsymbol{R}}$ by linear equations group.

$$
\left\{ \begin{array}{c}
	-\vec{\boldsymbol{r}}_1+\vec{\boldsymbol{r}}_2=\vec{\boldsymbol{r}},\\
	-m_1\vec{\boldsymbol{r}}_1+m_2\vec{\boldsymbol{r}}_2=\vec{\boldsymbol{R}}.\\
\end{array} \right. 
$$

so

$$
\left\{ \begin{array}{c}
	\vec{\boldsymbol{r}}_1=\vec{\boldsymbol{R}}-\dfrac{m_2}{m_1+m_2}\vec{\boldsymbol{r}}\\\\
	\vec{\boldsymbol{r}}_2=\vec{\boldsymbol{R}}+\dfrac{m_1}{m_1+m_2}\vec{\boldsymbol{r}}\\
\end{array} \right. 
$$

Subtitude the expressions above into ***Lagrangian***.

$$
\begin{align*}
L&=\frac{1}{2}m_1\left( \dot{\vec{\boldsymbol{R}}}-\frac{m_2}{m_1+m_2}\dot{\vec{\boldsymbol{r}}} \right) ^2+\frac{1}{2}m_2\left( \dot{\vec{\boldsymbol{R}}}+\frac{m_1}{m_1+m_2}\dot{\vec{\boldsymbol{r}}} \right) ^2-U\left( \left| \vec{\boldsymbol{r}} \right| \right)
\\\\
&=\frac{1}{2}\left( m_1+m_2 \right) \dot{\vec{\boldsymbol{R}}}^2+\frac{1}{2}\frac{m_1m_2}{m_1+m_2}\dot{\vec{\boldsymbol{r}}}^2-U\left( \left| \vec{\boldsymbol{r}} \right| \right) .
\end{align*}
$$

### (b)
Note that

$$
\frac{\partial L}{\partial \vec{\boldsymbol{R}}}=0,
$$

and there is no $\vec{\boldsymbol{Q}}^{\mathrm{curl}}$ in the system,

$$
\vec{\boldsymbol{Q}}^{\mathrm{curl}}=0,
$$

according to the defination of ***ignorable coordinates***, we can conclude that $\vec{\boldsymbol{R}}$ is definitely a ignorable vector and the three components of it are all ignorable coordinates. Subsitude it into ***Lagrange's equation***,

$$
0=\vec{\boldsymbol{Q}}^{\mathrm{curl}}=\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial \dot{\vec{\boldsymbol{R}}}}-\frac{\partial L}{\partial \vec{\boldsymbol{R}}}=\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial \dot{\vec{\boldsymbol{R}}}}=\frac{\mathrm{d}}{\mathrm{d}t}\left( m_1+m_2 \right) \dot{\vec{\boldsymbol{R}}}.
$$

And we write down the total momentum of the whole system,

$$
\vec{\boldsymbol{P}}=\frac{\partial L}{\partial \vec{\boldsymbol{v}}_1}+\frac{\partial L}{\partial \vec{\boldsymbol{v}}_2}=\left( m_1+m_2 \right) \dot{\vec{\boldsymbol{R}}}
$$

So

$$
\frac{\mathrm{d}}{\mathrm{d}t}\vec{\boldsymbol{P}}=\frac{\partial L}{\partial \vec{\boldsymbol{v}}_1}+\frac{\partial L}{\partial \vec{\boldsymbol{v}}_2}=\frac{\mathrm{d}}{\mathrm{d}t}\left( m_1+m_2 \right) \dot{\vec{\boldsymbol{R}}}=0.
$$

We can definitely assert that the total momentum of the system is conserved.

## J02.06
> A mass $m$ is acted on by a force derived from the generalized potential
> $$U^{(\mathrm{vel)}}(\vec{\boldsymbol{r}},\vec{\boldsymbol{v}},t)=V(r)+\vec{\boldsymbol{\sigma}}\cdot \vec{\boldsymbol{L}}$$ with the superscript "(vel)" denoting velocity dependent potential where $r = \sqrt{x^2 + y^2 + z^2}$, $\vec{\boldsymbol{\sigma}}=\sigma \vec{\boldsymbol{e}}_z$, $\vec{\boldsymbol{L}}=\vec{\boldsymbol{r}}\times m\vec{\boldsymbol{v}}$ and $\vec{\boldsymbol{r}}$ and $\vec{\boldsymbol{v}}$ are the position and velocity of the mass relative to some inertial coordinate system.
> (a) Express $U^{(\text{vel})}$ in Cartesian coordinates (the $s$ system) $x, y, z, \dot{x}, \dot{y}, \dot{z}$ and find the force $\vec{\boldsymbol{F}}$ and its three Cartesian components $F_x, F_y, F_z$.
> (b) Express $ U^{(\text{vel})}$ in spherical polar coordinates (that can be called the $q$ system) $r, \theta, \phi, \dot{r}, \dot{\theta}, \dot{\phi}$ and find the generalized force $Q_k$, $k = 1, 2, 3$.
> (c) The force vector found in (a) can be rewritten in terms of spherical polar unit vectors as $$\vec{\boldsymbol{F}}=F_r\vec{\boldsymbol{e}}_r+F_{\theta}\vec{\boldsymbol{e}}_{\theta}+F_{\phi}\vec{\boldsymbol{e}}_{\phi}$$ with $F_r=\vec{\boldsymbol{e}}_r\cdot \vec{\boldsymbol{F}}$, $F_{\theta}=\vec{\boldsymbol{e}}_{\theta}\cdot \vec{\boldsymbol{F}}$, $F_{\phi}=\vec{\boldsymbol{e}}_{\phi}\cdot \vec{\boldsymbol{F}}$. Show $Q_r = F_r$.
> (d) However $Q_\phi \neq F_\phi$, what does $Q_\phi$ correspond to in Newton Mechanics? What is the dimensionality of $Q_\phi \delta\phi$?
> (e) Based on this example, what do you learn about the difference between the orthogonal curvilinear coordinate system and the generalized coordinates?

### (a)
Note that $V(r)$ has spherical symmetry, as a result when we tend to express $U^{\text{(vel)}}$ we only need to consider $\vec{\boldsymbol{\sigma}}\cdot \vec{\boldsymbol{L}}$,

$$
\vec{\boldsymbol{\sigma}}\cdot \vec{\boldsymbol{L}}=\sigma \vec{\boldsymbol{e}}_z\cdot m\left[ \left( y\dot{z}-\dot{y}z \right) \vec{\boldsymbol{e}}_x+\left( z\dot{x}-\dot{z}x \right) \vec{\boldsymbol{e}}_y+\left( x\dot{y}-\dot{x}y \right) \vec{\boldsymbol{e}}_z \right] =\sigma m\left( x\dot{y}-\dot{x}y \right) .
$$

The spherical symmetry is reflected in

$$
\frac{\partial V\left( r \right)}{\partial x}=-\frac{x}{r}\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}r},\quad \frac{\partial V\left( r \right)}{\partial y}=-\frac{y}{r}\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}r},\quad \frac{\partial V\left( r \right)}{\partial z}=-\frac{z}{r}\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}r}.
$$

and in $\vec{\boldsymbol{\sigma}}\cdot \vec{\boldsymbol{L}}$ the $x$ and $-y$ play the totally same role, as a result, if I write $F_x$,

$$
F_x=\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial U^{\left( \mathrm{vel} \right)}}{\partial \dot{x}}-\frac{\partial U^{\left( \mathrm{vel} \right)}}{\partial x}=-\frac{x}{r}\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}r}-2\sigma m\dot{y},
$$

I can immediately write $F_y$ with $x$ be subsitituted by $-y$,

$$
F_y=-\frac{y}{r}\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}r}+2\sigma m\dot{x}.
$$

And 

$$
F_z=\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial U^{\left( \mathrm{vel} \right)}}{\partial \dot{z}}-\frac{\partial U^{\left( \mathrm{vel} \right)}}{\partial z}=-\frac{z}{r}\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}r}.
$$

### (b)
Here is a trick in mathetatics when simplify $x\dot{y}-\dot{x}y$ in spherical polar coordinates,

$$
x\dot{y}-\dot{x}y=x^2\frac{\mathrm{d}}{\mathrm{d}t}\frac{y}{x}=r^2\sin ^2\theta \cos ^2\phi \frac{\mathrm{d}}{\mathrm{d}t}\tan \phi =r^2\sin ^2\theta \dot{\phi}.
$$

So it is very tidy and we can write down the expression of $U^{\left( \mathrm{vel} \right)}$ in spherical polar coordinate smoothly,

$$
U^{\left( \mathrm{vel} \right)}=V\left( r \right) +m\sigma r^2\sin ^2\theta \dot{\phi}.
$$

As a result,

$$
\begin{align*}
Q_r&=\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial U^{\left( \mathrm{vel} \right)}}{\partial \dot{r}}-\frac{\partial U^{\left( \mathrm{vel} \right)}}{\partial r}=-\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}r}-2m\sigma r\sin ^2\theta \dot{\phi},
\\
Q_{\theta}&=\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial U^{\left( \mathrm{vel} \right)}}{\partial \dot{\theta}}-\frac{\partial U^{\left( \mathrm{vel} \right)}}{\partial \theta}=-m\sigma r^2\sin 2\theta \dot{\phi},
\\
Q_{\phi}&=\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial U^{\left( \mathrm{vel} \right)}}{\partial \dot{\phi}}-\frac{\partial U^{\left( \mathrm{vel} \right)}}{\partial \phi}=2m\sigma r\sin \theta \left( \dot{r}\sin \theta +r\cos \theta \dot{\theta} \right) .
\end{align*}
$$

### (c)
We konw that in *Cartesion coordinates* we have

$$
\vec{\boldsymbol{F}}=\left( -\frac{x}{r}\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}r}-2\sigma m\dot{y} \right) \vec{\boldsymbol{e}}_x+\left( -\frac{y}{r}\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}r}+2\sigma m\dot{x} \right) \vec{\boldsymbol{e}}_y+\left( -\frac{z}{r}\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}r} \right) \vec{\boldsymbol{e}}_z.
$$

And we know some relationship between $\vec{\boldsymbol{e}}_r$ and $x, y, z$,

$$
\vec{\boldsymbol{e}}_r=\frac{x\vec{\boldsymbol{e}}_x+y\vec{\boldsymbol{e}}_y+z\vec{\boldsymbol{e}}_z}{r}.
$$

Some we combine the two expressions and have

$$
\begin{align*}
F_r&=\vec{\boldsymbol{e}}_r\cdot \vec{\boldsymbol{F}}=\frac{x}{r}\left( -\frac{x}{r}\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}r}-2\sigma m\dot{y} \right) +\frac{y}{r}\left( -\frac{y}{r}\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}r}+2\sigma m\dot{x} \right) +\frac{z}{r}\left( -\frac{z}{r}\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}r} \right) 
\\
&=-\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}t}-2m\sigma \frac{x\dot{y}-\dot{x}y}{r}.
\end{align*}
$$

Remenber we have prove $x\dot{y}-\dot{x}y=r^2\sin ^2\theta \dot{\phi}$, take it into above expression,

$$
F_r=-\frac{\mathrm{d}V\left( r \right)}{\mathrm{d}t}-2m\sigma r\sin ^2\theta \dot{\phi}=Q_r.
$$

### (d)
We need to perform an identity transformation on the expression of $Q_\phi$, so as to figure out what is the corresponding function of it in Cartesion coordinate.

$$
\begin{align*}
Q_{\phi}&=2m\sigma r\sin \theta \left( \dot{r}\sin \theta +r\cos \theta \dot{\theta} \right) =m\sigma \frac{\mathrm{d}}{\mathrm{d}t}\left( r\sin \theta \right) ^2=m\sigma \frac{\mathrm{d}}{\mathrm{d}t}\left( x^2+y^2 \right) =m\sigma \left( 2x\dot{x}+2y\dot{y} \right) 
\\
&=xF_y-yF_x.
\end{align*}
$$

And note that

$$
xF_y-yF_x=\vec{\boldsymbol{e}}_z\cdot \left( \vec{\boldsymbol{r}}\times \vec{\boldsymbol{F}} \right) .
$$

As a result, $Q_\phi$ is the torque in direction of $z$ in Newtom Mechanics. So $Q_\phi\delta\phi$ means the work made by torque in $z$ direction.

$$
\mathrm{dim}Q_{\phi}=\left[ \mathrm{M} \right] \left[ \mathrm{L} \right] ^2\left[ T \right] ^{-2}.
$$

### (e)
We has testify the conclusion which we have learned in class:
+ In $s$-system, the force is just like what we are used to, it is consistent with the conception Newton gived.
+ In $q$-system, the force is so-called generalized force and may not be consistent with the conception in Newton mechanics, but if we mutiply generalized force and its conjugate generalize coordinate together, the gerneralized work is just work and has the same dimensionality Joule. 