import sqlite3
from werkzeug.security import generate_password_hash

# Veritabanına bağlan
conn = sqlite3.connect('proje_veritabani.db')
cursor = conn.cursor()

# Kullanıcılar Tablosunu Sil
cursor.execute('DROP TABLE IF EXISTS users')

# Kullanıcılar Tablosu
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL
    )
''')

# Araçlar Tablosu
cursor.execute('''
    CREATE TABLE IF NOT EXISTS vehicles (
        model_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        marka TEXT,
        model TEXT,
        yakit_turu TEXT,
        lastik_numaralari TEXT,
        genislik INTEGER,
        yukseklik INTEGER,
        jant_cap INTEGER,
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    )
''')

# Yakıt Tablosu
cursor.execute('''
    CREATE TABLE IF NOT EXISTS fuels (
        yakit_id INTEGER PRIMARY KEY AUTOINCREMENT,
        model_id INTEGER,
        yakit_turu TEXT,
        FOREIGN KEY (model_id) REFERENCES vehicles(model_id)
    )
''')

# Lastik Tablosu
cursor.execute('''
    CREATE TABLE IF NOT EXISTS tires (
        lastik_id INTEGER PRIMARY KEY AUTOINCREMENT,
        model_id INTEGER,
        lastik_marka TEXT,
        lastik_model TEXT,
        lastik_numaralari TEXT,
        yakit_verimliligi TEXT,
        performans TEXT,
        fiyat REAL,
        FOREIGN KEY (model_id) REFERENCES vehicles(model_id)
    )
''')

# Kullanıcı bilgisi ekleyelim
hashed_password = generate_password_hash("password1", method='pbkdf2:sha256')
cursor.execute('''
    INSERT INTO users (username, password_hash) VALUES (?, ?)
''', ("unique_username", hashed_password))

# Kullanıcının ID'sini alalım
user_id = cursor.lastrowid

# Araç Verilerini Ekleyelim
araclar = [
    (user_id, "BMW", "1 Series", "Benzin", "225 45 R17", 225, 45, 17),
    (user_id, "Audi", "A4", "Dizel", "205 55 R16", 205, 55, 16),
    (user_id, "Mercedes", "C-Class", "Elektrik", "195 65 R16", 195, 65, 16),
    (user_id, "Mazda", "3", "Elektrik", "225 40 R18", 225, 40, 18),
    (user_id, "Tesla", "Model S", "Benzin", "245 45 R19", 245, 45, 19),
    (user_id, "Kia", "Optima", "Elektrik", "225 50 R17", 225, 50, 17),
    (user_id, "Renault", "Megane", "Benzin", "245 40 R18", 245, 40, 18),
    (user_id, "Fiat", "Egea", "Dizel", "195 55 R16", 195, 55, 16),
    (user_id, "Mitsubishi", "Lancer", "Benzin", "195 55 R16", 195, 55, 16),
    (user_id, "Land Rover", "Discovery", "Benzin", "255 55 R20", 255, 55, 20),
    (user_id, "Volkswagen", "Golf", "Benzin", "195 65 R15", 195, 65, 15),
    (user_id, "Ford", "Ka", "Benzin", "175 65 R14", 175, 65, 14),
    (user_id, "Toyota", "Auris", "Hibrit", "205 55 R16", 205, 55, 16),
    (user_id, "Nissan", "Micra", "Benzin", "185 65 R15", 185, 65, 15),
    (user_id, "Chevrolet", "Aveo", "Benzin", "195 65 R15", 195, 65, 15),
    (user_id, "Renault", "Kadjar", "Benzin", "215 60 R17", 215, 60, 17),
    (user_id, "Dacia", "Logan", "Benzin", "185 65 R15", 185, 65, 15),
    (user_id, "Honda", "Civic Type R", "Benzin", "245 30 R20", 245, 30, 20),
    (user_id, "Ford", "Focus", "Dizel", "205 55 R16", 205, 55, 16),
    (user_id, "Honda", "Civic", "Benzin", "215 60 R17", 215, 60, 17),
    (user_id, "Hyundai", "Tucson", "Benzin", "225 60 R17", 225, 60, 17),
    (user_id, "Mazda", "CX-3", "Benzin", "215 60 R16", 215, 60, 16),


]

for arac in araclar:
    cursor.execute('''
        INSERT INTO vehicles (user_id, marka, model, yakit_turu, lastik_numaralari, genislik, yukseklik, jant_cap) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ''', arac)

# Yakıt Verilerini Ekleyelim
yakit_verileri = [
    (1, "Benzin"),
    (2, "Dizel"),
    (3, "Elektrik"),
    (4, "Elektrik"),
    (5, "Benzin"),
    (6,"Elektrik"),
    (7,"Benzin"),
    (8,"Dizel"),
    (9,"Benzin"),
    (10,"Benzin"),
    (11,"Benzin"),
    (12,"Benzin"),
    (13,"Benzin"),
    (14, "Hibrit"),
    (15,"Benzin"),
    (16,"Benzin"),
    (17,"Benzin"),
    (18,"Benzin"),
    (19,"Benzin"),
    (20,"Dizel"),
    (21,"Benzin"),
    (22,"Benzin"),
    (23,"Benzin"),


    # Diğer yakıt verileri buraya eklenecek
]

for yakit in yakit_verileri:
    cursor.execute('''
        INSERT INTO fuels (model_id, yakit_turu) VALUES (?, ?)
    ''', yakit)

# Lastik Verilerini Ekleyelim
lastik_verileri = [


    (1, "Bridgestone", "Potenza Sport", "225 45 R17", "D", "Orta", 2.576),
    (2, "Michelin", "Pilot Alpin", "225 45 R17", "C", "Orta", 3.474),
    (3, "Bridgestone", "Blizzak", "205 55 R16", "C", "Orta", 2.375),
    (4, "Michelin", "Pilot Alpin", "205 55 R16", "D", "Yüksek", 4.301),
    (5, "Bridgestone", "Turanza", "195 65 R16", "C", "Orta", 1.949),
    (6, "Michelin", "Primacy", "195 65 R16", "C", "Orta", 2.048),
    (7, "Bridgestone", "Turanza", "225 40 R18", "B", "Yüksek", 2.928),
    (8, "Michelin", "CrossClimate", "225 40 R18", "B", "Yüksek", 3.499),
    (9, "Bridgestone", "Potenza Sport", "245 45 R19", "C", "Yüksek", 6.720),
    (10, "Michelin", "Pilot Sport 4S", "245 45 R19", "C", "Yüksek", 5.547),
    (11, "Bridgestone", "Potenza Sport", "225 50 R17", "C", "Yüksek", 3.428),
    (12, "Michelin", "Pilot Alpin", "225 50 R17", "C", "Yüksek", 5.936),
    (13, "Bridgestone", "Turanza", "245 40 R18", "B", "Yüksek", 5.842),
    (14, "Michelin", "Pilot Sport", "245 40 R18", "B", "Yüksek", 5.321),
    (15, "Bridgestone", "Turanza", "195 55 R16", "C", "Orta", 2.372),
    (16, "Michelin", "Primacy", "195 55 R16", "B", "Yüksek", 3.910),
    (17, "Bridgestone", "Potenza Sport", "195 55 R16", "B", "Yüksek", 2.399),
    (18, "Michelin", "Pilot Sport", "195 55 R16", "B", "Yüksek", 4.042),
    (19, "Bridgestone", "Potenza Sport", "255 55 R20", "C", "Yüksek", 8.962),
    (20, "Michelin", "Pilot Alpin", "255 55 R20", "B", "Yüksek", 4.566),
    (21, "Bridgestone", "Potenza Sport", "195 65 R15", "B", "Yüksek", 1.949),
    (22, "Michelin", "Primacy", "195 65 R15", "C", "Yüksek", 2.542,),
    (23, "Bridgestone", "Ecopia", "175 65 R14", "B", "Yüksek", 1.817),
    (24, "Michelin", "Energy Saver", "175 65 R14", "C", "Yüksek", 2.795),
    (25, "Bridgestone", "Ecopia", "205 55 R16", "B", "Yüksek", 2.050),
    (26, "Michelin", "Primacy", "205 55 R16", "B", "Yüksek", 2.334),
    (27, "Bridgestone", "Potenza Sport", "185 65 R15", "C", "Yüksek", 5.864),
    (28, "Michelin", "Primacy", "185 65 R15", "C", "Yüksek", 2.805),
    (29, "Bridgestone", "Turanza", "195 65 R15", "B", "Yüksek", 2.093),
    (30, "Michelin", "Primacy", "195 65 R15", "B", "Yüksek", 2.244),
    (31, "Bridgestone", "Potenza Sport", "215 60 R17", "B", "Yüksek", 3.753),
    (32, "Michelin", "Pilot Sport", "215 60 R17", "C", "Orta", 2.060),
    (33, "Bridgestone", "Turanza", "185 65 R15", "A", "Yüksek", 2.082),
    (34, "Michelin", "Primacy", "185 65 R15", "C", "Orta", 2.047),
    (35, "Bridgestone", "Potenza Sport", "245 30 R20", "C", "Orta", 7.512),
    (36, "Michelin", "Pilot Sport PS4", "245 30 R20", "D", "Yüksek", 10.730),
    (37, "Bridgestone", "Turanza", "205 55 R16", "C", "Orta", 2.387),
    (38, "Michelin", "Primacy", "205 55 R16", "C", "Orta", 2.334),
    (39, "Bridgestone", "Duravis All Season", "215 60 R17","C","Yüksek", 5.370),
    (40, "Michelin", "Alpin", "215 60 R17", "C", "Yüksek", 5.674),
    (41, "Bridgestone", "Turanza", "225 65 R17", "A","Yüksek", 4.293),
    (42, "Michelin", "Primacy", "225 65 R17", "B", "Yüksek,", 4.568),
    (43, "Bridgestone", "Potenza Sport", "215 60 R16", "C", "Orta", 4.265),
    (44, "Michelin","Primacy","215 60 R16","C","Orta",4.848),


]

for lastik in lastik_verileri:
    print("Tuple:", lastik)
    try:
        cursor.execute('''
        INSERT INTO tires (model_id, lastik_marka, lastik_model, lastik_numaralari, yakit_verimliligi, performans, fiyat) VALUES (?, ?, ?, ?, ?, ?, ?)
         ''', lastik)
    except Exception as e:
        print("Hata:", e)

# Değişiklikleri kaydet ve bağlantıyı kapat
conn.commit()
conn.close()