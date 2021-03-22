import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItemProps {
	path: string;
	label: string;
}

const NavItem = ({ path, label }: NavItemProps): JSX.Element => {
	const router = useRouter();
	const isActive = router ? router.pathname.includes(path) : false;

	return (
		<Link href={path}>
			<a
				className={`px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
					isActive
						? 'bg-light-offset text-black'
						: 'text-dark-offset hover:text-black hover:bg-white'
				}`}
			>
				{label}
			</a>
		</Link>
	);
};

export interface TopNavProps {
	color?: 'light' | 'dark';
	/**
	 * If `true` the TopNav will stick to the top of the page.
	 */
	isSticky?: boolean;
}

export const TopNav = ({
	color = 'light',
	isSticky = false,
}: TopNavProps): JSX.Element => {
	return (
		<header
			className={
				color === 'light'
					? 'mb-8 bg-light text-dark'
					: 'mb-8 bg-dark text-light'
			}
		>
			<div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
				<div className='relative flex items-center justify-between h-16'>
					<h1>Spotify</h1>
					<nav className='hidden sm:block sm:ml-6'>
						<ul className='flex space-x-4'>
							<li>
								<NavItem path='/' label='Home' />
							</li>
							<li>
								<NavItem path='/' label='Explore' />
							</li>
							<li>
								<NavItem path='/' label='My Account' />
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

/**
 * COMPOSE --> | XYZ              1  2  3 |
 * <TopNav>
 *  <NavItems>
 *    <Title>XYZ</Title>
 *    <Logo src="" alt="" />
 *  </NavItems>
 *  <NavItems>
 *    <NavItems>1</NavItem>
 *    <NavItems>2</NavItem>
 *    <NavItems>3</NavItem>
 *  </NavItems>
 * </TopNav>
 */
