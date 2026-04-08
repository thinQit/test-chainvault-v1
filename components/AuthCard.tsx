'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function AuthCard() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signup')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)
  const [message, setMessage] = useState('')

  const passwordValid = password.length >= 8 && /\d/.test(password)

  return (
    <Card id="signup" className="mx-auto w-full max-w-md rounded-xl border border-white/10 bg-[#071a38]/80 p-6 text-white">
      <h3 className="text-xl font-semibold">{mode === 'signup' ? 'Create your ChainVault account' : 'Sign in to ChainVault'}</h3>
      <p className="mt-1 text-sm text-white/70">Secure access to trading, balances, and account controls.</p>

      <div className="mt-4 flex gap-2">
        <Button variant={mode === 'signup' ? 'default' : 'outline'} onClick={() => setMode('signup')}>Sign Up</Button>
        <Button variant={mode === 'signin' ? 'default' : 'outline'} onClick={() => setMode('signin')}>Sign In</Button>
      </div>

      <div className="mt-4 space-y-3">
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-white/20 bg-[#03152f] text-white" />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-white/20 bg-[#03152f] text-white" />
        <p className="text-xs text-white/60">Password must be at least 8 characters and include a number.</p>
        {mode === 'signup' ? (
          <label className="flex items-center gap-2 text-xs text-white/70">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            I agree to the Terms and Risk Disclosure.
          </label>
        ) : null}
      </div>

      <Button
        className="mt-4 w-full bg-[#003F88] hover:bg-[#00316c]"
        onClick={() => {
          if (!email.includes('@')) return setMessage('Enter a valid email.')
          if (!passwordValid) return setMessage('Password does not meet requirements.')
          if (mode === 'signup' && !agree) return setMessage('You must accept terms.')
          localStorage.setItem('chainvault_session', JSON.stringify({ email, mode, ts: Date.now() }))
          setMessage('Success! Demo session saved in localStorage.')
        }}
      >
        {mode === 'signup' ? 'Create Account' : 'Sign In'}
      </Button>
      {message ? <p className="mt-3 text-sm text-[#D4A574]">{message}</p> : null}
    </Card>
  )
}
