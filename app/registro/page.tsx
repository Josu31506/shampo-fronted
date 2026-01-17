'use client';

import { useState } from 'react';

export default function RegistroPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleShopRegister = () => {
        // Redirect to Shop registration or handle Shop OAuth
        console.log('Shop registration clicked');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registration data:', formData);
        // Handle registration authentication
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#e8c5c1] to-[#d9b4b0] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <img
                            src="https://images.ctfassets.net/qnz31r3vypeq/6w6yXZV0gW2AW99nkRkHir/4ae4e7f3de23ba3ff8be73e22c7448f2/1_Logo_onda___natural.png"
                            alt="Ūnda Natural"
                            className="h-12 w-auto opacity-50"
                        />
                    </div>

                    {/* Title */}
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Crear cuenta</h1>
                        <p className="text-sm text-slate-500">Regístrate para comenzar</p>
                    </div>

                    {/* Shop Button */}
                    <button
                        onClick={handleShopRegister}
                        className="w-full bg-[#5B4FE8] hover:bg-[#4B3FD8] text-white font-semibold py-3.5 px-6 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        Continuar con shop
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-slate-200"></div>
                        <span className="px-4 text-sm text-slate-400">o</span>
                        <div className="flex-1 border-t border-slate-200"></div>
                    </div>

                    {/* Registration Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre completo"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d9b4b0] focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d9b4b0] focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d9b4b0] focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirmar contraseña"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d9b4b0] focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        {/* Continue Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#d9b4b0] hover:bg-[#c9a4a0] text-white font-semibold py-3.5 px-6 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            Crear cuenta
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-slate-600">
                            ¿Ya tienes una cuenta?{' '}
                            <a href="/login" className="text-[#d9b4b0] hover:text-[#c9a4a0] font-semibold transition-colors">
                                Inicia sesión
                            </a>
                        </p>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="mt-6 text-center space-x-4 text-sm">
                    <a href="#" className="text-[#d9b4b0] hover:text-[#c9a4a0] transition-colors">
                        Política de privacidad
                    </a>
                    <a href="#" className="text-[#d9b4b0] hover:text-[#c9a4a0] transition-colors">
                        Términos del servicio
                    </a>
                </div>
            </div>
        </div>
    );
}
