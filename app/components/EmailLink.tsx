'use client';
import Obfuscate from 'react-obfuscate';

export default function EmailLink({ email }: { email: string }) {
  return (
    <span className="emailLink">
      <Obfuscate email={email} />
    </span>
  );
}
