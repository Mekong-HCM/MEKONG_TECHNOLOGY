import { Cpu, Wifi, Shield, Zap, Check, BarChart3, Settings, Layers } from 'lucide-react';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { gatewaySpecs, gatewayCapacity, KinexusOSTiers } from '../../data/productDetails';

function MK200Tab() {
    return (
        <div className="space-y-4">
            <GlassCard className="p-4 overflow-x-auto">
                <h4 className="text-sm font-bold text-neon-cyan mb-2">KX-200 Standard vs KX-300 AI Edge</h4>
                <table className="w-full text-xs">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="text-left py-2 px-3 text-gray-400 font-medium w-1/3">Thông số</th>
                            <th className="text-left py-2 px-3 font-bold text-neon-cyan">KX-200 Standard</th>
                            <th className="text-left py-2 px-3 font-bold text-neon-magenta">KX-300 AI Edge</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gatewaySpecs.map((row, i) => (
                            <tr key={i} className="border-b border-white/5">
                                <td className="py-2 px-3 text-gray-400">{row.label}</td>
                                <td className="py-2 px-3 text-gray-200">{row.mk200}</td>
                                <td className="py-2 px-3 text-gray-200">{row.mk300}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </GlassCard>
        </div>
    );
}

function FeaturesTab() {
    return (
        <GlassCard className="p-5">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2"><Cpu size={16} className="text-neon-cyan" /> Đặc điểm nổi bật</h4>
            <ul className="space-y-2">
                {[
                    { icon: Wifi, text: 'Multi-protocol: MQTT, OPC UA, Modbus, EtherCAT, PROFINET' },
                    { icon: Zap, text: 'AI Edge: Vision inference, predictive maintenance tại biên' },
                    { icon: Shield, text: 'Bảo mật: TLS 1.3, TPM 2.0, Secure Boot, encrypted OTA' },
                    { icon: Cpu, text: 'ARM Cortex + NPU 6 TOPS — xử lý AI không cần cloud' },
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <item.icon size={14} className="text-neon-cyan mt-0.5 flex-shrink-0" />
                        {item.text}
                    </li>
                ))}
            </ul>
        </GlassCard>
    );
}

function CapacityTab() {
    return (
        <GlassCard className="p-5">
            <h4 className="text-sm font-bold text-white mb-3">Công suất sản xuất</h4>
            <div className="grid grid-cols-2 gap-3">
                {[
                    { label: 'Tổng/năm', value: gatewayCapacity.total, color: 'text-neon-cyan' },
                    { label: 'KX-200', value: gatewayCapacity.mk200, color: 'text-neon-cyan' },
                    { label: 'KX-300', value: gatewayCapacity.mk300, color: 'text-neon-magenta' },
                    { label: 'Gross margin', value: gatewayCapacity.margin, color: 'text-green-400' },
                ].map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                        <div className={`text-lg font-extrabold ${item.color}`}>{item.value}</div>
                        <div className="text-[10px] text-gray-400 mt-1">{item.label}</div>
                    </div>
                ))}
            </div>
            <div className="mt-3 text-[10px] text-gray-500 flex items-center gap-1">
                <Check size={10} className="text-green-400" /> Thay thế Siemens SIMATIC, Schneider EcoStruxure — giá rẻ hơn 20-30%
            </div>
        </GlassCard>
    );
}

function PlatformTab() {
    return (
        <div className="space-y-4">
            <GlassCard className="p-4">
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2"><Layers size={16} className="text-neon-cyan" /> KinexusOS — Nền tảng IoT SaaS</h4>
                <div className="grid md:grid-cols-3 gap-3">
                    {KinexusOSTiers.map((tier, i) => {
                        const colors = ['#00E5FF', '#E040FB', '#76FF03'];
                        return (
                            <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5" style={{ borderTopColor: colors[i], borderTopWidth: 3 }}>
                                <div className="text-sm font-bold mb-1" style={{ color: colors[i] }}>{tier.name}</div>
                                <div className="text-lg font-extrabold text-white mb-2">{tier.price}</div>
                                <div className="text-[10px] text-gray-400 mb-3">≤ {tier.devices} thiết bị</div>
                                <ul className="space-y-1">
                                    {tier.features.map((f, j) => (
                                        <li key={j} className="text-[10px] text-gray-300 flex items-start gap-1.5">
                                            <Check size={10} className="text-green-400 mt-0.5 flex-shrink-0" />{f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </GlassCard>
            <GlassCard className="p-3">
                <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Mô hình doanh thu</span>
                    <span className="text-neon-cyan font-semibold">Recurring SaaS + Hardware bundle</span>
                </div>
            </GlassCard>
        </div>
    );
}

const tabs: TabConfig[] = [
    { key: 'specs', label: 'KX-200 / KX-300', icon: Cpu, content: <MK200Tab /> },
    { key: 'features', label: 'Đặc điểm nổi bật', icon: Settings, content: <FeaturesTab /> },
    { key: 'capacity', label: 'Công suất', icon: BarChart3, content: <CapacityTab /> },
    { key: 'platform', label: 'KinexusOS', icon: Layers, content: <PlatformTab /> },
];

export function ProductIoTGateway() {
    return (
        <TabSlide
            id="product-iot"
            title="IoT Gateway & BMS"
            subtitle="Industrial IoT Gateway Made in Vietnam — ARM Cortex, AI tại biên, Multi-protocol, 5G-ready"
            tabs={tabs}
        />
    );
}
