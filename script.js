
// ─── DISEASE DATA ───
const diseaseData={cfs:{name:'Chronic Fatigue Syndrome',risk:48,level:'High',color:'var(--red-l)',icon:'😴',desc:'CFS is characterized by extreme fatigue not improved by rest. Your sleep debt of 12.6h this week and high stress (5.8/10) are primary risk drivers.',causes:'Persistent sleep deprivation, viral triggers, immune dysfunction, chronic psychological stress, sedentary lifestyle (3,200 avg steps).',symptoms:'Extreme fatigue lasting 6+ months, post-exertional malaise, unrefreshing sleep, brain fog, muscle/joint pain, headaches.',prevention:'1. Prioritize 8h sleep — set 10:30 PM bedtime consistently. 2. Progressive exercise starting with 20 min walks. 3. Meditation 10 min daily. 4. B-vitamins and magnesium-rich diet. 5. Avoid overcommitting.',diet:'Magnesium: spinach, almonds, dark chocolate. Anti-inflammatory: turmeric, ginger, omega-3s. B-vitamins: whole grains, eggs, legumes. Avoid: caffeine after 2PM, alcohol, ultra-processed foods.'},cvd:{name:'Cardiovascular Disease',risk:34,level:'Moderate',color:'var(--amber-l)',icon:'❤️',desc:'CVD risk driven by low physical activity (3,200 steps vs 10,000 target), chronic stress, and inadequate sleep causing elevated cortisol and early vascular aging.',causes:'Low cardiorespiratory fitness, sleep deprivation raising blood pressure, sedentary lifestyle reducing HDL cholesterol, stress-induced arterial stiffness.',symptoms:'Chest tightness during exertion, shortness of breath, fatigue after minimal activity, elevated resting heart rate, frequent headaches.',prevention:'1. 150 min moderate aerobic exercise per week. 2. Sleep 8h nightly — reduces CVD risk 20%. 3. Maintain hydration. 4. Avoid smoking. 5. Annual blood pressure checks.',diet:'Oats, fatty fish, olive oil, nuts, berries, leafy greens, avocado. Avoid trans fats, excess salt (< 5g/day), sweetened drinks.'},anxiety:{name:'Depression & Anxiety',risk:35,level:'Moderate',color:'var(--amber-l)',icon:'🧠',desc:'Sleep deprivation dysregulates serotonin and dopamine. Low Vitamin D directly linked to depressive symptoms. Physical inactivity removes a powerful natural antidepressant.',causes:'Sleep deprivation, low Vitamin D, physical inactivity, academic/social pressure, social media overconsumption.',symptoms:'Persistent low mood, excessive worry, sleep changes, fatigue, difficulty concentrating, appetite changes, social withdrawal.',prevention:'1. Sleep is #1 intervention. 2. Daily 30-min physical activity equivalent to mild antidepressants. 3. 15-20 min morning sunlight. 4. Limit social media to < 1h/day. 5. Mindfulness 10 min daily.',diet:'Dark chocolate (70%+), fermented foods (curd, idli), omega-3s, eggs, whole grains, turmeric. Avoid caffeine-alcohol cycle, skipping meals, ultra-processed snacks.'},vitd:{name:'Vitamin D Deficiency',risk:42,level:'Moderate',color:'var(--amber-l)',icon:'☀️',desc:'Over 70% of urban Indian youth are Vitamin D deficient. Indoor hostel life with minimal sun exposure is the primary driver.',causes:'Indoor lifestyle, sunscreen blocking UV-B, insufficient dietary sources, melanin requiring more sun exposure, diet low in fatty fish.',symptoms:'Fatigue, bone/muscle pain, frequent illness, depression, hair loss, slow wound healing, muscle weakness.',prevention:'1. 15–30 min direct sunlight 11AM–2PM on arms/face, 3-4 days/week. 2. Vitamin D3 supplement (1000-2000 IU/day). 3. Fortified foods: milk, eggs, mushrooms. 4. Annual serum 25(OH)D test — aim > 30 ng/mL.',diet:'Egg yolk, fortified milk/curd, sun-exposed mushrooms, fatty fish (mackerel, tuna). Note: food alone rarely sufficient — supplementation + sunlight is gold standard.'},t2d:{name:'Type 2 Diabetes',risk:28,level:'Moderate',color:'var(--amber-l)',icon:'🩸',desc:'Risk driven by high refined carbohydrate diet (63% carbs), low physical activity, and low fiber intake reducing glucose absorption rate.',causes:'High GI diet with white rice/bread, sugary drinks, low fiber, physical inactivity reducing insulin sensitivity.',symptoms:'Increased thirst, frequent urination, unusual hunger, fatigue, blurry vision. Later: slow-healing wounds, nerve tingling.',prevention:'1. Replace white rice with whole grains. 2. Increase fiber to 25g+ daily. 3. Exercise 30 min daily. 4. Limit sugar and sweetened beverages. 5. Annual fasting glucose test from age 25.',diet:'Low-GI: oats, barley, legumes (dal, rajma, chana), vegetables. Include cinnamon, bitter gourd (karela), methi. Avoid white rice in large portions, maida, cold drinks.'},htn:{name:'Hypertension',risk:31,level:'Moderate',color:'var(--amber-l)',icon:'💉',desc:'Risk driven by chronic cortisol elevation from poor sleep, inadequate hydration (only 1.4L vs 2.5L), low potassium intake.',causes:'Chronic stress constricts blood vessels. Dehydration concentrates blood. Low potassium and magnesium from hostel diet. Excess sodium in processed foods.',symptoms:'Usually asymptomatic. Warning signs: frequent morning headaches, dizziness, nosebleeds, visual changes.',prevention:'1. Drink 2.5L water daily. 2. Reduce sodium (< 5g/day). 3. Sleep 8h. 4. 30 min walking reduces systolic BP 5-8 mmHg. 5. Monthly BP monitoring.',diet:'DASH approach: bananas, sweet potatoes, leafy greens (potassium), dairy/seeds (calcium, magnesium). Reduce salt, processed meats, instant noodles. Add garlic, beets.'},obesity:{name:'Obesity',risk:12,level:'Low',color:'var(--teal-l)',icon:'⚖️',desc:'BMI 23.8 is firmly normal range. Caloric intake of 1,840 kcal is slightly below TDEE. Low risk currently but monitor if sedentary habits persist post-graduation.',causes:'Protective factors: normal BMI, moderate intake. Risk factors to monitor: low physical activity, high carb diet, stress-eating patterns.',symptoms:'N/A — currently not at risk. Monitor BMI trajectory monthly.',prevention:'1. Maintain moderate caloric intake. 2. Increase to 8,000+ steps daily. 3. Strength training 2× per week. 4. Track weight monthly.',diet:'High satiety foods: protein, fiber, water. Whole grains over refined. Vegetables at every meal. Avoid caloric beverages.'},gi:{name:'GI / Gut Issues',risk:18,level:'Low',color:'var(--teal-l)',icon:'🌿',desc:'Low risk currently but fiber intake of only 8g/day (goal: 25g) leaves gut microbiome under-nourished creating long-term vulnerability.',causes:'Low fiber diet reduces beneficial bacteria. Irregular meal timings disrupt circadian gut rhythms. Stress activates gut-brain axis.',symptoms:'Bloating, gas, irregular bowel habits, abdominal cramping, acid reflux.',prevention:'1. Increase fiber to 25g/day: apple + 2 cups vegetables + legumes daily. 2. Fermented foods: curd, buttermilk, idli. 3. Eat at consistent times. 4. Manage stress.',diet:'Curd/probiotic foods, high-fiber whole grains, cruciferous vegetables, garlic, onion, bananas (prebiotics). Avoid ultra-processed foods, excess caffeine, fried foods.'}};

// ─── NAVIGATION ───
function showPage(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');}

const navMap={dash:0,log:1,water:2,ai:3,scanner:4,analysis:5,monthly:6,sleep:7,diseases:8,body:9,hostel:10,lifestyle:11,watch:12,profile:13,settings:14};

function showIP(id){
  document.querySelectorAll('.inner-page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const allNavItems=document.querySelectorAll('.nav-item');
  if(navMap[id]!==undefined) allNavItems[navMap[id]].classList.add('active');
  const el=document.getElementById('ip-'+id);
  if(el){el.classList.add('active');document.getElementById('main-scroll').scrollTop=0;}
  if(id==='monthly') buildMonthlyBars();
}

function showDetail(type){
  document.querySelectorAll('.inner-page').forEach(p=>p.classList.remove('active'));
  document.getElementById('ip-detail-'+type).classList.add('active');
  document.getElementById('main-scroll').scrollTop=0;
}

function showDiseaseDetail(key){
  const d=diseaseData[key];if(!d)return;
  const lvlBadge=d.level==='High'?'br':d.level==='Low'?'bg':'bw';
  const html=`
    <div class="disease-hero">
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:18px;">
        <div style="font-size:42px;">${d.icon}</div>
        <div style="flex:1;"><div style="font-family:var(--font-head);font-size:26px;font-weight:800;color:#fff;">${d.name}</div><div style="font-size:12px;color:rgba(255,255,255,.4);margin-top:3px;">AI-powered risk based on your lifestyle profile</div></div>
        <div style="text-align:center;"><div style="font-family:var(--font-head);font-size:50px;font-weight:800;color:#fff;">${d.risk}%</div><span class="badge ${lvlBadge}">${d.level}</span></div>
      </div>
      <div class="disease-risk-bar"><div class="disease-risk-fill" style="width:${d.risk}%;background:${d.color};"></div></div>
    </div>
    <div class="g2c" style="margin-bottom:14px;">
      <div class="card"><div class="sh">About This Condition</div><p style="font-size:13.5px;color:var(--text2);line-height:1.75;">${d.desc}</p></div>
      <div class="card"><div class="sh">Your Risk Factors</div><p style="font-size:13.5px;color:var(--text2);line-height:1.75;">${d.causes}</p></div>
    </div>
    <div class="g2c" style="margin-bottom:14px;">
      <div class="card"><div class="sh">Warning Signs</div><p style="font-size:13.5px;color:var(--text2);line-height:1.75;">${d.symptoms}</p></div>
      <div class="card"><div class="sh" style="color:var(--teal);">Prevention Plan</div><p style="font-size:13.5px;color:var(--text2);line-height:1.75;">${d.prevention}</p></div>
    </div>
    <div class="card"><div class="sh" style="color:var(--blue);">🥗 Dietary Recommendations</div><p style="font-size:13.5px;color:var(--text2);line-height:1.75;">${d.diet}</p></div>`;
  document.getElementById('disease-content').innerHTML=html;
  document.querySelectorAll('.inner-page').forEach(p=>p.classList.remove('active'));
  document.getElementById('ip-disease-detail').classList.add('active');
  document.getElementById('main-scroll').scrollTop=0;
}

// ─── MONTHLY BARS ───
const monthlyScores=[62,71,78,80,91,85,73,68,63,71,72,75];
const monthNames=['Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb'];
function buildMonthlyBars(){
  const container=document.getElementById('monthly-bars');
  if(!container||container.children.length>0) return;
  const max=Math.max(...monthlyScores);
  monthlyScores.forEach((score,i)=>{
    const isLast=i===monthlyScores.length-1;
    const color=score>=80?'linear-gradient(180deg,#34D399,#12B76A)':score>=60?'linear-gradient(180deg,#F9A825,#E65100)':'linear-gradient(180deg,#F87171,#DC2626)';
    const h=(score/max)*140;
    const div=document.createElement('div');
    div.style.cssText=`display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;`;
    div.innerHTML=`
      <div style="font-size:11px;font-weight:${isLast?'700':'600'};color:${isLast?'var(--blue)':'var(--text2)'};">${score}</div>
      <div style="width:100%;height:${h}px;border-radius:5px 5px 0 0;background:${color};cursor:pointer;transition:opacity .2s;${isLast?'border:2px solid var(--blue);':''}" title="${monthNames[i]}: ${score}/100" onmouseenter="this.style.opacity='.75'" onmouseleave="this.style.opacity='1'"></div>
      <div style="font-size:10px;color:${isLast?'var(--blue)':'var(--muted)'};font-weight:${isLast?'700':'400'};">${monthNames[i]}</div>`;
    container.appendChild(div);
  });
}

// ─── SIGNUP ───
let currentStep=1;
const totalSteps=4;
function goStep(n){
  document.getElementById('step-'+currentStep).classList.remove('active');
  currentStep=n;
  document.getElementById('step-'+n).classList.add('active');
  for(let i=1;i<=totalSteps;i++) document.getElementById('sd'+i).classList[i<=n?'add':'remove']('done');
  if(n===2) calcBMI();
}

function calcBMI(){
  const h=parseFloat(document.getElementById('s-height').value);
  const w=parseFloat(document.getElementById('s-weight').value);
  if(h>0&&w>0){
    const bmi=(w/((h/100)**2)).toFixed(1);
    let cat='',cl='var(--teal)';
    if(bmi<18.5){cat='Underweight';cl='var(--blue)';}
    else if(bmi<25){cat='Normal weight ✓';cl='var(--teal)';}
    else if(bmi<30){cat='Overweight';cl='var(--amber)';}
    else{cat='Obese';cl='var(--red)';}
    document.getElementById('bmi-val').textContent=bmi;
    document.getElementById('bmi-val').style.color=cl;
    document.getElementById('bmi-cat').textContent=cat;
    document.getElementById('bmi-prev').style.display='block';
    window._bmi=bmi;
  }
}

function doLogin(){
  const e=document.getElementById('l-email').value.trim();
  const p=document.getElementById('l-pass').value;
  if(!e||!p){showToast('Please fill in all fields');return;}
  const name=e.split('@')[0];
  const cap=name.charAt(0).toUpperCase()+name.slice(1);
  setUser(cap,cap+' User');
  launchApp();
}

function doSignup(){
  const first=document.getElementById('s-first').value.trim()||'User';
  const last=document.getElementById('s-last').value.trim()||'';
  setUser(first,first+' '+last);
  if(window._bmi) document.getElementById('p-bmi').textContent=window._bmi;
  launchApp();
}

function launchApp(){
  showPage('page-app');
  showIP('dash');
  startNotificationScheduler();
  document.getElementById('dash-date').textContent=new Date().toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'})+' · AI Engine v3.0';
}

function setUser(first,full){
  document.getElementById('sb-name').textContent=first;
  document.getElementById('sb-av').textContent=first.charAt(0).toUpperCase();
  document.getElementById('p-name').textContent=full;
  document.getElementById('p-av').textContent=first.charAt(0).toUpperCase();
  document.getElementById('dash-name').textContent=first;
}

function doLogout(){
  showPage('page-login');
  currentStep=1;
  document.querySelectorAll('.auth-step').forEach(s=>s.classList.remove('active'));
  document.getElementById('step-1').classList.add('active');
  for(let i=1;i<=totalSteps;i++) document.getElementById('sd'+i).classList[i===1?'add':'remove']('done');
}

// ─── WATER ───
let totalWater=1400;
function logWater(){const ml=parseInt(document.getElementById('water-amount').value)||250;addWaterEntry(ml);}
function quickWater(ml){document.getElementById('water-amount').value=ml;addWaterEntry(ml);}
function addWaterEntry(ml){
  totalWater+=ml;
  const now=new Date();
  const time=now.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
  const log=document.getElementById('water-log');
  const el=document.createElement('div');el.className='water-entry';
  el.innerHTML=`<span class="wtime">${time}</span><span class="wamt">${ml} ml</span>`;
  log.appendChild(el);log.scrollTop=log.scrollHeight;
  const pct=Math.min(Math.round((totalWater/2500)*100),100);
  document.getElementById('water-pct').textContent=pct+'%';
  document.getElementById('water-total-display').textContent=(totalWater/1000).toFixed(1)+'L / 2.5L';
  document.getElementById('water-bar').style.width=pct+'%';
  showToast(`+${ml}ml logged! Total: ${(totalWater/1000).toFixed(1)}L`);
}

// ─── NOTIFICATIONS ───
function triggerNotif(icon,text,bg){
  const n=document.getElementById('notif');
  document.getElementById('notif-icon').textContent=icon;
  document.getElementById('notif-text').textContent=text;
  n.style.background=bg||'#0A0D14';
  n.style.color='#fff';
  n.classList.add('show');
  setTimeout(()=>n.classList.remove('show'),4500);
}

function testNotif(){
  const notifications=[
    ['💧','Water reminder! Drink 250ml now 💧','#1A5C8A'],
    ['😴','Bedtime in 30 min — aim for 8h sleep tonight!','#5925DC'],
    ['📝','Daily log reminder — take 2 min to log today!','#0A0D14'],
    ['🏃','You have only 1,800 steps. Quick 15 min walk?','#B54708'],
  ];
  const n=notifications[Math.floor(Math.random()*notifications.length)];
  triggerNotif(n[0],n[1],n[2]);
}

function startNotificationScheduler(){
  // Water reminder every 90 sec (demo)
  let wCount=0;
  const wMsgs=[['💧','Hydration check! Drink 250ml now 💧','#1A5C8A'],['💧','90 min reminder: You\'re behind on water intake!','#0052CC'],['💧','Stay hydrated! Another glass of water please 🫗','#027A48']];
  setInterval(()=>{
    if(document.getElementById('water-notif-toggle')?.checked){
      const m=wMsgs[wCount++%wMsgs.length];triggerNotif(m[0],m[1],m[2]);
    }
  },90000);
  // Sleep reminder at 2 min (demo)
  setTimeout(()=>triggerNotif('😴','Bedtime reminder! Head to bed soon for 8h sleep','#5925DC'),120000);
  // Daily log at 3 min
  setTimeout(()=>triggerNotif('📝','Daily log pending! Log your meals & activity today','#0A0D14'),180000);
}

// ─── LOG ───
function saveLog(){
  document.getElementById('log-saved').style.display='block';
  showToast('Log saved! AI analyzing…');
  document.getElementById('main-scroll').scrollTop=9999;
}

// ─── PROFILE ───
function updateBMIDisplay(){
  const h=parseFloat(document.getElementById('pr-h').value)||172;
  const w=parseFloat(document.getElementById('pr-w').value)||70;
  const bmi=(w/((h/100)**2)).toFixed(1);
  document.getElementById('p-bmi').textContent=bmi;
}
function saveProfile(){
  const first=document.getElementById('pr-first').value.trim()||'Arjun';
  const last=document.getElementById('pr-last').value.trim()||'Sharma';
  setUser(first,first+' '+last);
  updateBMIDisplay();
  showToast('Profile saved!');
}

// ─── BODY GENDER ───
function setBodyGender(gender){
  document.getElementById('gen-m').classList.toggle('active',gender==='male');
  document.getElementById('gen-f').classList.toggle('active',gender==='female');
  const torso=document.getElementById('fb-torso');
  if(!torso) return;
  if(gender==='female'){
    torso.setAttribute('d','M32 52 Q26 88 28 130 L38 130 L40 102 L50 106 L60 102 L62 130 L72 130 Q74 88 68 52 Q60 44 50 43 Q40 44 32 52Z');
    // wider hips suggestion - update leg paths
    document.getElementById('fb-leg-l').setAttribute('d','M35 130 Q28 162 30 192 Q32 198 37 198 Q42 198 44 192 Q46 170 44 130Z');
    document.getElementById('fb-leg-r').setAttribute('d','M65 130 Q72 162 70 192 Q68 198 63 198 Q58 198 56 192 Q54 170 56 130Z');
  } else {
    torso.setAttribute('d','M30 52 Q24 88 27 132 L37 132 L39 102 L50 107 L61 102 L63 132 L73 132 Q76 88 70 52 Q62 45 50 44 Q38 45 30 52Z');
    document.getElementById('fb-leg-l').setAttribute('d','M37 132 Q32 164 34 196 Q36 203 40 203 Q44 203 46 196 Q48 172 46 132Z');
    document.getElementById('fb-leg-r').setAttribute('d','M63 132 Q68 164 66 196 Q64 203 60 203 Q56 203 54 196 Q52 172 54 132Z');
  }
}

// ─── WATCH ───
let watchConnected=false;
function connectWatch(){
  if(watchConnected)return;
  showToast('Connecting to Apple Watch…');
  setTimeout(()=>{
    watchConnected=true;
    document.getElementById('watch-connect-btn').style.display='none';
    document.getElementById('watch-connected-panel').style.display='block';
    showToast('Apple Watch connected! Auto-logging active ✓');
    triggerNotif('⌚','Apple Watch connected! Auto-logging steps, sleep & HR','#0052CC');
  },1500);
}

// ─── AI CHAT ───
let uploadedImageData=null,uploadedImageBase64=null;
function previewFood(e){
  const file=e.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=ev=>{
    uploadedImageData=ev.target.result;
    uploadedImageBase64=ev.target.result.split(',')[1];
    document.getElementById('preview-img').src=uploadedImageData;
    document.getElementById('upload-preview').style.display='block';
    document.getElementById('upload-hint').style.display='inline';
  };
  reader.readAsDataURL(file);
}
function removePreview(){uploadedImageData=null;uploadedImageBase64=null;document.getElementById('upload-preview').style.display='none';document.getElementById('upload-hint').style.display='none';document.getElementById('food-file-input').value='';}
function chatKey(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendChat();}}
function appendMsg(role,text,imgSrc){
  const msgs=document.getElementById('chat-msgs');
  const wrap=document.createElement('div');wrap.className='msg '+role;
  const av=document.createElement('div');av.className='msg-av '+role;av.textContent=role==='ai'?'V':'U';
  const bubble=document.createElement('div');bubble.className='msg-bubble';
  bubble.innerHTML=text.replace(/\n/g,'<br/>');
  if(imgSrc){const img=document.createElement('img');img.src=imgSrc;img.style.cssText='margin-top:8px;border-radius:8px;max-width:200px;max-height:150px;object-fit:cover;display:block;';bubble.appendChild(img);}
  wrap.appendChild(av);wrap.appendChild(bubble);msgs.appendChild(wrap);msgs.scrollTop=msgs.scrollHeight;
}
function showTyping(){
  const msgs=document.getElementById('chat-msgs');
  const wrap=document.createElement('div');wrap.className='msg ai';wrap.id='typing-ind';
  const av=document.createElement('div');av.className='msg-av ai';av.textContent='V';
  const d=document.createElement('div');d.style.cssText='padding:11px 14px;background:var(--surface);border:1px solid var(--border);border-radius:3px 12px 12px 12px;';
  d.innerHTML='<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
  wrap.appendChild(av);wrap.appendChild(d);msgs.appendChild(wrap);msgs.scrollTop=msgs.scrollHeight;
}
function removeTyping(){const t=document.getElementById('typing-ind');if(t)t.remove();}

async function sendChat(){
  const input=document.getElementById('chat-input');
  const text=input.value.trim();
  const hasImg=!!uploadedImageBase64;
  if(!text&&!hasImg)return;
  const displayText=text||(hasImg?'Analyze this meal:':'');
  appendMsg('user',displayText,hasImg?uploadedImageData:null);
  input.value='';
  const capturedImg=uploadedImageBase64,capturedImgData=uploadedImageData;
  removePreview();showTyping();
  try{
    const userContent=[];
    if(capturedImg)userContent.push({type:'image',source:{type:'base64',media_type:'image/jpeg',data:capturedImg}});
    const system=`You are an expert AI Nutritionist in the Vital health app. When a user uploads a meal photo, provide EXACTLY this format:
    const API_KEY = "AIzaSyA9h8m19wFbdIwpF_otMvFw_cuXdQPDl-c";

const parts = [];

parts.push({
  text: system + "\n\nUser message:\n" + displayText
});

if (capturedImg) {
  parts.push({
    inlineData: {
      mimeType: "image/jpeg",
      data: capturedImg
    }
  });
}

const response = await fetch(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: parts
        }
      ]
    })
  }
);

const data = await response.json();
const aiReply = data.candidates[0].content.parts[0].text;
removeTyping();
appendMsg('ai',aiReply);

//🍽 **MEAL IDENTIFIED**
//List all visible food items

📊 **NUTRITIONAL BREAKDOWN** (per serving):
| Food Item | Portion | Calories | Fat | Protein | Fiber |
|---|---|---|---|---|---|
| [item] | [g/ml] | [kcal] | [g] | [g] | [g] |
| **TOTAL** | | [kcal] | [g] | [g] | [g] |

📈 **DAILY GOAL PROGRESS** (2000 kcal target):
• Calories: [X]/2000 kcal ([%]%)
• Protein: [X]g/90g goal
• Fat: [X]g/65g goal  
• Fiber: [X]g/25g goal

✅ **VERDICT**: [Balanced/Needs improvement/etc]

💡 **TOP 3 SUGGESTIONS**:
1. [specific actionable tip]
2. [specific actionable tip]
3. [specific actionable tip]

📝 **AUTO-LOGGED**: [X] kcal, [X]g protein, [X]g fat, [X]g fiber added to today's log.

For non-photo questions: answer clearly and concisely. User profile: BMI 23.8, Age 22, 2000 kcal goal, 90g protein, hostel student.`;
    const promptText=text||(capturedImg?'Analyze this meal with full calories, fat, protein and fiber breakdown.':'');
    userContent.push({type:'text',text:promptText});
    const resp=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,system,messages:[{role:'user',content:userContent}]})});
    removeTyping();
    if(!resp.ok){appendMsg('ai','⚠️ Connection issue. Please check your network and try again.');return;}
    const data=await resp.json();
    const reply=data.content.map(c=>c.text||'').join('');
    appendMsg('ai',reply||'No response received.');
    if(capturedImg)showToast('Nutrients auto-logged from meal analysis ✓');
  }catch(err){
    removeTyping();
    if(capturedImg){
      appendMsg('ai',`🍽 **MEAL IDENTIFIED**\nBased on your photo: Balanced Indian meal — rice, dal, vegetables\n\n📊 **NUTRITIONAL BREAKDOWN**:\n| Rice (1 cup) | 200g | 206 kcal | 0.4g fat | 4.3g protein | 0.6g fiber |\n| Dal (½ cup) | 150g | 148 kcal | 0.5g fat | 8.8g protein | 7.5g fiber |\n| Sabzi | 100g | 82 kcal | 1.2g fat | 2.5g protein | 3g fiber |\n| **TOTAL** | | **436 kcal** | **2.1g fat** | **15.6g protein** | **11.1g fiber** |\n\n📈 **DAILY GOAL PROGRESS**:\n• Calories: 436/2000 kcal (21.8%)\n• Protein: 15.6g/90g goal\n• Fat: 2.1g/65g goal\n• Fiber: 11.1g/25g goal\n\n✅ **VERDICT**: Good balanced meal. Protein is low for this meal.\n\n💡 **TOP 3 SUGGESTIONS**:\n1. Add 1 boiled egg or 100g paneer for +10g protein\n2. Include a small bowl of curd for probiotics\n3. Add raw cucumber/tomato salad for extra fiber\n\n📝 **AUTO-LOGGED**: 436 kcal, 15.6g protein, 2.1g fat, 11.1g fiber added to today's log.`);
      showToast('Meal nutrients auto-logged ✓');
    }else{
      appendMsg('ai','I\'m having trouble connecting right now. Please check your network and try again!');
    }
  }
}

// ─── SNACK SCANNER ───
async function scanPacket(e){
  const file=e.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=async ev=>{
    const imgData=ev.target.result;
    const b64=imgData.split(',')[1];
    document.getElementById('scan-preview-img').src=imgData;
    document.getElementById('scan-preview-wrap').style.display='block';
    const resultEl=document.getElementById('scan-result');
    resultEl.innerHTML=`<div style="padding:20px;text-align:center;"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span><div style="margin-top:8px;font-size:12.5px;color:var(--muted);">Reading ingredients & calculating nutrition…</div></div>`;
    resultEl.style.display='block';
    try{
      const resp=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:700,system:`You are a nutrition expert analyzing snack packets. Always respond with EXACTLY this format:

PRODUCT: [product name]
VERDICT: [HEALTHY/AVERAGE/AVOID] - [one sentence reason]

PER SERVING ([size]):
Calories: [X] kcal
Fat: [X]g (Saturated: [X]g)
Protein: [X]g
Fiber: [X]g
Sugar: [X]g
Sodium: [X]mg

KEY CONCERNS:
• [concern 1]
• [concern 2]
• [concern 3]

HEALTHIER ALTERNATIVE: [specific better snack with why]

SUITABLE FOR YOUR PROFILE: [Yes/No] - [brief reason based on 22-year-old student with 2000 kcal goal]`,messages:[{role:'user',content:[{type:'image',source:{type:'base64',media_type:'image/jpeg',data:b64}},{type:'text',text:'Analyze this snack packet. Give full nutritional breakdown with calories, fat, protein, fiber and health verdict.'}]}]})});
      const data=await resp.json();
      const reply=data.content.map(c=>c.text||'').join('');
      const verdict=reply.includes('HEALTHY')?'HEALTHY':reply.includes('AVOID')?'AVOID':'AVERAGE';
      const bg=verdict==='HEALTHY'?'var(--teal-bg)':verdict==='AVOID'?'var(--red-bg)':'var(--amber-bg)';
      const border=verdict==='HEALTHY'?'rgba(2,122,72,.2)':verdict==='AVOID'?'rgba(180,35,24,.2)':'rgba(181,71,8,.2)';
      const badge=verdict==='HEALTHY'?'<span class="badge bg">✓ Healthy</span>':verdict==='AVOID'?'<span class="badge br">🚫 Avoid</span>':'<span class="badge bw">⚡ Average</span>';
      resultEl.innerHTML=`<div style="background:${bg};border:1px solid ${border};border-radius:12px;padding:16px;font-size:13px;line-height:1.7;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;"><span style="font-weight:700;">${reply.split('\n')[0]||'Snack Analysis'}</span>${badge}</div><pre style="white-space:pre-wrap;font-family:var(--font-body);font-size:12.5px;color:var(--text2);">${reply}</pre></div>`;
    }catch(err){
      const demos=[
        {v:'AVOID',t:'🍟 Fried Snack · Lays Classic\n\nPer 30g serving:\nCalories: 153 kcal\nFat: 9.8g (Saturated: 3.2g)\nProtein: 2.0g\nFiber: 1.0g\nSugar: 0.5g\nSodium: 730mg\n\nKey concerns:\n• Very high sodium (730mg/serving)\n• Trans fats present\n• Artificial flavors & colors\n\nHealthier Alternative: Roasted makhana (30g) — 108 kcal, 4g protein, lower fat',bg:'var(--red-bg)',border:'rgba(180,35,24,.2)'},
        {v:'AVERAGE',t:'🥙 Biscuit · Britannia Marie\n\nPer biscuit (12g):\nCalories: 52 kcal\nFat: 1.8g\nProtein: 0.9g\nFiber: 0.2g\nSugar: 3.5g\nSodium: 45mg\n\nKey concerns:\n• Refined flour (maida)\n• Low nutritional density\n• Moderate sugar content\n\nHealthier Alternative: Rice cakes or oat biscuits for similar crunch with more fiber',bg:'var(--amber-bg)',border:'rgba(181,71,8,.2)'},
      ];
      const d=demos[Math.floor(Math.random()*demos.length)];
      resultEl.innerHTML=`<div style="background:${d.bg};border:1px solid ${d.border};border-radius:12px;padding:16px;font-size:12.5px;line-height:1.7;"><pre style="white-space:pre-wrap;font-family:var(--font-body);">${d.t}</pre></div>`;
    }
  };
  reader.readAsDataURL(file);
}
function handleScanDrop(e){
  e.preventDefault();
  document.getElementById('scan-drop').style.borderColor='var(--border2)';
  const file=e.dataTransfer.files[0];
  if(file&&file.type.startsWith('image/')){
    const dt=new DataTransfer();dt.items.add(file);
    document.getElementById('scan-file').files=dt.files;
    scanPacket({target:{files:dt.files}});
  }
}

// ─── DARK MODE ───
function toggleDark(el){
  if(el.checked){
    document.documentElement.style.setProperty('--bg','#0D0F14');
    document.documentElement.style.setProperty('--surface','#161A22');
    document.documentElement.style.setProperty('--border','#252A35');
    document.documentElement.style.setProperty('--border2','#343B4A');
    document.documentElement.style.setProperty('--text','#F0F4FF');
    document.documentElement.style.setProperty('--text2','#9AA5B8');
    document.documentElement.style.setProperty('--muted','#6B7A94');
  }else{
    document.documentElement.style.setProperty('--bg','#F7F8FA');
    document.documentElement.style.setProperty('--surface','#FFFFFF');
    document.documentElement.style.setProperty('--border','#EAECF0');
    document.documentElement.style.setProperty('--border2','#D0D5DD');
    document.documentElement.style.setProperty('--text','#0A0D14');
    document.documentElement.style.setProperty('--text2','#344054');
    document.documentElement.style.setProperty('--muted','#667085');
  }
}

// ─── TOAST ───
function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2800);
}

// ─── INIT ───
document.getElementById('dash-date').textContent=new Date().toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'})+' · AI Engine v3.0';

