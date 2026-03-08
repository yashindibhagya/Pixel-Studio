'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-4">About us</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              We turn ideas into <span className="gradient-text">digital products</span> that work
            </h2>
            <p className="mt-6 text-zinc-400 leading-relaxed">
              DevoLabs is a team of designers and developers who love building for the web and mobile. We partner with businesses—from startups to enterprises—to create websites and apps that are fast, beautiful, and built to grow.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              We use modern stacks like React, Next.js, and React Native so your product is maintainable, scalable, and a joy to use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="relative text-6xl font-mono font-bold text-white/10 select-none">{"</>"}</div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-32 h-32 border border-cyan-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute w-48 h-48 border border-violet-500/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <span className="block text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</span>
              <span className="block mt-1 text-zinc-400 text-sm font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
