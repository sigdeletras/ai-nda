from datetime import datetime, timedelta, timezone

import jwt
from pwdlib import PasswordHash

password_hash = PasswordHash.recommended()
ALGORITHM = "HS256"


def hash_password(password: str) -> str:
    return password_hash.hash(password)


def verify_password(password: str, hashed: str) -> bool:
    return password_hash.verify(password, hashed)


def create_access_token(subject: str, secret_key: str, expires_minutes: int) -> str:
    now = datetime.now(timezone.utc)
    payload = {
        "sub": subject,
        "iat": now,
        "exp": now + timedelta(minutes=expires_minutes),
    }
    return jwt.encode(payload, secret_key, algorithm=ALGORITHM)


def decode_access_token(token: str, secret_key: str) -> dict:
    return jwt.decode(token, secret_key, algorithms=[ALGORITHM], options={"require": ["sub", "exp"]})
