'use client'
import React from 'react'

function Form() {
    return (
        <form className=" md:space-y-4 space-y-2 lg:mt-0 mt-3 lg:space-y-5">
            <div className="relative">
                <input
                    type='text'
                    required
                    placeholder=""
                    className="peer w-full bg-transparent border border-yellow-400/30 rounded-xl px-2 md:px-4 md:pt-3 pt-2 lg:pt-5 pb-2 text-white focus:outline-none focus:border-yellow-400"
                />
                <label className="absolute left-4 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-yellow-400">
                    Your name
                </label>
            </div>
            <div className="relative">
                <input
                    type='number'
                    required
                    placeholder=""
                    className="peer w-full bg-transparent border border-yellow-400/30 rounded-xl px-4 md:pt-3 pt-2 lg:pt-5 pb-2 text-white focus:outline-none focus:border-yellow-400"
                />
                <label className="absolute z-20 left-4 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-yellow-400">
                    Mobile number
                </label>
            </div>
            <div className="relative">
                <textarea
                    rows={4}
                    required
                    placeholder=""
                    className="peer w-full bg-transparent border border-yellow-400/30 rounded-xl px-4 md:pt-3 pt-2 lg:pt-5 pb-2 text-white focus:outline-none focus:border-yellow-400"
                />
                <label className="absolute left-4 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-yellow-400">
                    Your Message
                </label>
            </div>

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 rounded-xl"
            >
                SEND MESSAGE
            </button>
        </form>
    )
}


export default Form;