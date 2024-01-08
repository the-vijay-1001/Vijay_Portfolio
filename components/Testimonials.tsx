"use client"

import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'

function Testimonials() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		rootMargin: "-280px 0px",
		threshold: 0.5,
	});
	return <>
		<section ref={ref}>

			{inView && <>
				<div className="container px-6 py-8 mx-auto">
					<div className="max-w-md mx-auto text-center">
						<motion.h1
							initial={{ opacity: 0, x: -350, }}
							whileInView={{ opacity: 1 }}
							animate={{ x: 1 }}
							transition={{ delay: 0.5, duration: 0.5 }}
							className="text-4xl font-semibold mb-6 lg:text-5xl">
							<span className="text-purple-700">Testim</span>onials
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, x: 350 }}
							whileInView={{ opacity: 1 }}
							animate={{ x: 0 }}
							transition={{ delay: 0.5, duration: 0.5 }}
							className="text-xl text-gray-500 font-medium">
							See the best Members works best for you and your team.
						</motion.p>
					</div>
					<div className="grid items-center gap-4 xl:grid-cols-5">
						<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
							<h2 className="text-4xl font-bold">Duo assum utroque appetere an</h2>
							<p className="dark:text-gray-400">Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei diceret alienum, et sit cetero malorum. Et sea iudico consequat, est sanctus adipisci ex.</p>
						</div>
						<div className="p-6 xl:col-span-3">
							<div className="grid gap-4 md:grid-cols-2">
								<div className="grid content-center gap-4">
									<motion.div
										initial={{ opacity: 0, y: -100 }}
										whileInView={{ opacity: 1 }}
										animate={{ y: 0 }}
										transition={{ delay: 0.6, duration: 0.5 }}
										className="p-6 rounded shadow-lg shadow-slate-400  bg-neutral-200">
										<p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.</p>
										<div className="flex items-center mt-4 space-x-4">
											<img src="https://source.unsplash.com/51x51/?portrait" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
											<div>
												<p className="text-lg font-semibold">Leroy Jenkins</p>
												<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
											</div>
										</div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, y: -100 }}
										whileInView={{ opacity: 1 }}
										animate={{ y: 0 }}
										transition={{ delay: 0.8, duration: 0.5 }}
										className="p-6 rounded shadow-lg shadow-slate-400 bg-neutral-200">
										<p>Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy ne, eam putent iudicabit consulatu cu.</p>
										<div className="flex items-center mt-4 space-x-4">
											<img src="https://source.unsplash.com/52x52/?portrait" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
											<div>
												<p className="text-lg font-semibold">Leroy Jenkins</p>
												<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
											</div>
										</div>
									</motion.div>motion.
								</div>
								<div className="grid content-center gap-4">
									<motion.div
										initial={{ opacity: 0, y: -100 }}
										whileInView={{ opacity: 1 }}
										animate={{ y: 0 }}
										transition={{ delay: 1, duration: 0.5 }}
										className="p-6 rounded shadow-lg shadow-slate-400 bg-neutral-200">
										<p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo errem elaboraret. Agam mollis scripserit ea his, ut nec postea verear persecuti. Ea noster senserit eam, ferri omittantur ei nec. Id mel solet libris efficiantur, commune explicari et eos. Case movet ad est, sed tota vocent appetere ea.</p>
										<div className="flex items-center mt-4 space-x-4">
											<img src="https://source.unsplash.com/53x53/?portrait" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
											<div>
												<p className="text-lg font-semibold">Leroy Jenkins</p>
												<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
											</div>
										</div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, y: -100 }}
										whileInView={{ opacity: 1 }}
										animate={{ y: 0 }}
										transition={{ delay: 1.2, duration: 0.5 }}
										className="p-6 rounded shadow-lg shadow-slate-400 bg-neutral-200">
										<p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil luptatum per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro. Eius meis salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at eum, per mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae patrioque qui, probo bonorum vivendum ex vim.</p>
										<div className="flex items-center mt-4 space-x-4">
											<img src="https://source.unsplash.com/54x54/?portrait" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
											<div>
												<p className="text-lg font-semibold">Leroy Jenkins</p>
												<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
											</div>
										</div>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>}
		</section>

	</>
}

export default Testimonials