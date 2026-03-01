function App() {
  const patients = [
    {name: "John Doe", weight_pre: 75, weight_post: 70, bp: "120/80mmHg", uf_goal: 5.0, status: "✅ Normal"},
    {name: "Jane Smith", weight_pre: 80, weight_post: 74, bp: "185/95mmHg", uf_goal: 6.0, status: "❌ High BP"}
  ];

  return (
    <div style={{padding: '40px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh'}}>
      <div style={{maxWidth: '1400px', margin: '0 auto'}}>
        {/* HEADER */}
        <div style={{background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', borderRadius: '24px', padding: '32px', marginBottom: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.2)'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <h1 style={{color: '#1e293b', margin: 0, fontSize: '36px', fontWeight: '800'}}>🩺 Dialysis Dashboard</h1>
              <p style={{color: '#64748b', fontSize: '18px', margin: '8px 0 0 0'}}>Unit A - Real-time patient monitoring</p>
            </div>
            <button style={{padding: '16px 32px', background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: 'white', border: 'none', borderRadius: '16px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 8px 24px rgba(59,130,246,0.4)'}}>🔄 Refresh</button>
          </div>
        </div>

        {/* TABLE CARD */}
        <div style={{background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.3)'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{background: 'linear-gradient(135deg, #1e40af, #1e3a8a)'}}>
                <th style={{padding: '24px 24px', color: 'white', fontWeight: '800', fontSize: '16px', textAlign: 'left'}}>Patient</th>
                <th style={{padding: '24px 24px', color: 'white', fontWeight: '800', fontSize: '16px', textAlign: 'left'}}>Weight Pre/Post</th>
                <th style={{padding: '24px 24px', color: 'white', fontWeight: '800', fontSize: '16px', textAlign: 'left'}}>Blood Pressure</th>
                <th style={{padding: '24px 24px', color: 'white', fontWeight: '800', fontSize: '16px', textAlign: 'left'}}>UF Goal</th>
                <th style={{padding: '24px 24px', color: 'white', fontWeight: '800', fontSize: '16px', textAlign: 'left'}}>Status</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p, i) => (
                <tr key={i} style={{backgroundColor: p.status.includes('❌') ? '#fee2e2' : '#f0fdf4', transition: 'all 0.3s ease'}}>
                  <td style={{padding: '24px', color: '#1e293b', fontWeight: '600', fontSize: '16px'}}>{p.name}</td>
                  <td style={{padding: '24px', color: '#1e293b', fontWeight: '600', fontSize: '16px'}}><strong>{p.weight_pre}→{p.weight_post}kg</strong></td>
                  <td style={{padding: '24px', color: '#1e293b', fontWeight: '600', fontSize: '16px'}}>{p.bp}</td>
                  <td style={{padding: '24px', color: '#1e293b', fontWeight: '600', fontSize: '16px'}}><strong>{p.uf_goal}L</strong></td>
                  <td style={{padding: '24px', 
                      color: p.status.includes('❌') ? '#dc2626' : '#059669', 
                      fontWeight: '800', fontSize: '18px', textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                    {p.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
