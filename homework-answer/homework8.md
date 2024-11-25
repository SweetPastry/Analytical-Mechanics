# 经典力学第八次作业

## J19.01

### (a)

Poisson-bracket condition asks
$$
\left[ Q_i,P_j \right] _{qp}=\delta _{ij},
$$
and according to the definiton
$$
\begin{align}
\left[ Q_i,P_j \right] _{qp}&=\sum_{k=1}^D{\left\{ \frac{\partial Q_i}{\partial q_k}\frac{\partial P_j}{\partial p_k}-\frac{\partial Q_i}{\partial p_k}\frac{\partial P_j}{\partial q_k} \right\}}
\\
&=\sum_{k=1}^D{a_{ik}b_{jk}}=\left( ab^T \right) _{ij}=\delta _{ij}.
\end{align}
$$
As a result $ab^T=U$, so $b=a^{-T}$ ($a^{-T}$ means $(a^{-1})^T$).

### (b)

$$
\begin{align}
P_i&=\sum_{k=1}^D{b_{ik}p_k}\rightarrow -\mathrm{i}\hbar \sum_{k=1}^D{b_{ik}\frac{\partial}{\partial q_k}}=-\mathrm{i}\hbar \sum_{k=1}^D{\left( a^{-1} \right) _{ki}\frac{\partial}{\partial q_k}}
\\
&=-\mathrm{i}\hbar \sum_{k=1}^D{\frac{\partial q_k}{\partial Q_i}\frac{\partial}{\partial q_k}}=-\mathrm{i}\hbar \frac{\partial}{\partial Q_i}.
\end{align}
$$

### (c)

By (1) we have
$$
b=a^{-T}=\frac{1}{10}\left( \begin{matrix}
	4&		-3\\
	2&		1\\
\end{matrix} \right) .
$$

## J19.04

Obviously that $\left[ Q_i,Q_j \right] _{qp}=0, \left[ P_i,P_j \right] _{qp}=0$, and we still need to verify that
$$
\begin{align}
\left[ Q_i,P_j \right] _{qp}&=\sum_{k=1}^D{\left\{ \frac{\partial Q_i}{\partial q_k}\frac{\partial P_j}{\partial p_k}-\frac{\partial Q_i}{\partial p_k}\frac{\partial P_j}{\partial q_k} \right\}}
\\
&=\sum_{k=1}^D{\left\{ \delta _{ik}\delta _{jk}\cos \theta _i\cos \theta _j+\delta _{ik}\delta _{jk}\sin \theta _i\sin \theta _j \right\}}
\\
&=\delta _{ij}\cos \left( \theta _i-\theta _j \right)= \delta _{ij}.
\end{align}
$$
So this transformation is canonical.

## J19.05

### (a)

Let denote
$$
q=\left( x_1,y_1,z_1,x_2,y_2,z_2 \right) ^T,
$$

$$
p=\left( p_{1x},p_{1y},p_{1z},p_{2x},p_{2y},p_{2z} \right) ^T,
$$

$$
Q=\left( x_2-x_1,y_2-y_1,z_2-z_1,\frac{m_2x_2+m_1x_1}{M},\frac{m_2y_2+m_1y_1}{M},\frac{m_2z_2+m_1z_1}{M} \right)^T,
$$

$$
P=\left( \mu \left( \frac{p_{2x}}{m_2}-\frac{p_{1x}}{m_1} \right) ,\mu \left( \frac{p_{2y}}{m_2}-\frac{p_{1y}}{m_1} \right) ,\mu \left( \frac{p_{2z}}{m_2}-\frac{p_{1z}}{m_1} \right) ,p_{2x}+p_{1x},p_{2y}+p_{1y},p_{2z}+p_{1z} \right) ^T.
$$
So we have
$$
\frac{\partial Q}{\partial q}=\left( \begin{matrix}
	-1&		\,\,&		\,\,&		1&		\,\,&		\,\,\\
	\,\,&		-1&		\,\,&		\,\,&		1&		\,\,\\
	\,\,&		\,\,&		-1&		\,\,&		\,\,&		1\\
	\frac{m_1}{M}&		\,\,&		\,\,&		\frac{m_2}{M}&		\,\,&		\,\,\\
	\,\,&		\frac{m_1}{M}&		\,\,&		\,\,&		\frac{m_2}{M}&		\,\,\\
	\,\,&		\,\,&		\frac{m_1}{M}&		\,\,&		\,\,&		\frac{m_2}{M}\\
\end{matrix} \right) ,\qquad
\frac{\partial P}{\partial p}=\left( \begin{matrix}
	\frac{m_2}{M}&		\,\,&		\,\,&		\frac{m_1}{M}&		\,\,&		\,\,\\
	\,\,&		\frac{m_2}{M}&		\,\,&		\,\,&		\frac{m_1}{M}&		\,\,\\
	\,\,&		\,\,&		\frac{m_2}{M}&		\,\,&		\,\,&		\frac{m_1}{M}\\
	1&		\,\,&		\,\,&		1&		\,\,&		\,\,\\
	\,\,&		1&		\,\,&		\,\,&		1&		\,\,\\
	\,\,&		\,\,&		1&		\,\,&		\,\,&		1\\
\end{matrix} \right) ,
$$
denote $a=\frac{\partial Q}{\partial q}$ and $b=\frac{\partial P}{\partial p}$, so $ab^T=U$. As a result, this transformation is canonical.

### (b)

According to `J19.01(b)` we immediately detrive this conclusion.


## J19.07

Poisson bracket condition requires
$$
\left[ Q_i,P_j \right] _{qp}=\sum_{k=1}^D{\left\{ \frac{\partial Q_i}{\partial q_k}\frac{\partial P_j}{\partial p_k}-\frac{\partial Q_i}{\partial p_k}\frac{\partial P_j}{\partial q_k} \right\}}=\delta_{ij},
$$
and $\delta_{ij}$ is a pure number without unit, so if $[q][p]=\mathrm{ML}^2/\mathrm{T}$, here is $[Q][P]=\mathrm{ML}^2/\mathrm{T}$.

## J19.10

### (a)

Poisson bracket condition requires
$$
\left[ Q,P \right] _{ij}=\frac{\partial Q}{\partial q}\frac{\partial P}{\partial p}-\frac{\partial Q}{\partial p}\frac{\partial P}{\partial q}=ab=1,
$$
as a result $b=a^{-1}$.

### (b)

Express $q$ and $p$ with $Q$ and $p$, $p=-\frac{a}{P}$, $q=\frac{QP^2}{ba^2}$, and there is no $t$ in expression so
$$
H\left( Q,P,t \right) =H\left( q\left( Q,P \right) ,p\left( Q,P \right) ,t \right) =\frac{P^2}{2m}+\frac{m\omega ^2Q^2}{2}.
$$

### (c)

According to Hamilton canonical equation
$$
\begin{cases}
	\dot{Q}=\dfrac{\partial H}{\partial P}=\dfrac{P}{m},\\\\
	\dot{P}=-\dfrac{\partial H}{\partial Q}=-m\omega ^2Q.\\
\end{cases}
$$
So
$$
\begin{cases}
	Q=Q_0\cos \left( \omega t+\varphi \right),\\\\
	P=-m\omega Q_0\sin \left( \omega t+\varphi \right).\\
\end{cases}
$$
As a result
$$
q\left( t \right) =a^{-1}m^2\omega ^2Q_{0}^{3}\cos \left( \omega t+\varphi \right) \sin ^2\left( \omega t+\varphi \right) .
$$

According this example, we know that by reasonable canonical transformation we can transform equasions to so easy-to-solve format.