"use client"

import { Network, AlertCircle, Share2, Zap } from "lucide-react"

const features = [
  {
    icon: Network,
    title: "Unify Threat Intelligence",
    description:
      "Consolidate your disparate threat feeds into a centralized platform with 300+ integrations, using a consistent STIX 2.1 data model, powerful visualizations and custom dashboards.",
  },
  {
    icon: AlertCircle,
    title: "Reduce Alert Fatigue",
    description:
      "Benefit from automation and XTM Agentic AI for faster processing of the entire threat management cycle plus generate finished TI reports in minutes NOT Hours OR Days.",
  },
  {
    icon: Share2,
    title: "Make Threat Intelligence Actionable",
    description: "Role based sharing and dissemination across teams and tools for timely action.",
  },
  {
    icon: Zap,
    title: "Streamline Incident Response",
    description: "Utilize case management capabilities for incident-related data and accelerate your investigations.",
  },
]

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-black via-slate-900 to-blue-900 py-44 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-2 items-start">
          {/* Left Column */}
          <div className="mr-32">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Collect, correlate and leverage
            </h2>
            <p className="text-md text-slate-300 mb-8">
              Operationalize threat intelligence like never before. Share it timely across your security teams and build
              threat-informed defense.
            </p>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-2 gap-10 -ml-24">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  //className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition"
                >
                  <div className="w-12 h-12 ">
                    <Icon className="text-cyan-400" size={36} />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">{feature.title}</h2>
                  <p className="text-md text-slate-300 mb-8">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
