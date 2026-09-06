$baseUrl = "http://127.0.0.1:8000/api"

Write-Host "Testing Health..."
Invoke-RestMethod -Uri "$baseUrl/health"

Write-Host "Testing Create Vehicle..."
$vehicle = @{
    registration_number = "AS-01-XX-1234"
    vehicle_type = "Truck"
    cargo_category = "General"
    capacity = 10.5
    driver_name = "John Doe"
    driver_contact = "1234567890"
} | ConvertTo-Json
$res = Invoke-RestMethod -Uri "$baseUrl/vehicles/" -Method Post -Body $vehicle -ContentType "application/json"
$res | Format-List

Write-Host "Testing Get Vehicles..."
Invoke-RestMethod -Uri "$baseUrl/vehicles/"

Write-Host "Testing Create Trip..."
$trip = @{
    vehicle_id = 1
    origin = "Guwahati"
    destination = "Shillong"
    cargo_category = "General"
    cargo_priority = "High"
} | ConvertTo-Json
$res = Invoke-RestMethod -Uri "$baseUrl/trips/" -Method Post -Body $trip -ContentType "application/json"
$res | Format-List

Write-Host "Testing Get Trips..."
Invoke-RestMethod -Uri "$baseUrl/trips/"

Write-Host "Testing Create Incident..."
$incident = @{
    incident_type = "Accident"
    location = "NH-44"
    severity = "High"
    description = "Road blocked"
} | ConvertTo-Json
$res = Invoke-RestMethod -Uri "$baseUrl/incidents/" -Method Post -Body $incident -ContentType "application/json"
$res | Format-List

Write-Host "Testing Get Incidents..."
Invoke-RestMethod -Uri "$baseUrl/incidents/"

Write-Host "Testing Auth Login..."
$login = @{
    role = "driver"
} | ConvertTo-Json
$res = Invoke-RestMethod -Uri "$baseUrl/auth/login" -Method Post -Body $login -ContentType "application/json"
$res | Format-List
